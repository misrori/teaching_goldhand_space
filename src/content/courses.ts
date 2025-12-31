// Dynamic course loading from markdown files
export interface CourseTab {
  id: string;
  title: string;
  content: string;
  order: number;
}

export interface CourseMeta {
  title: string;
  description: string;
  icon: string;
  order: number;
}

export interface Course {
  id: string;
  title: string;
  description: string;
  icon: string;
  tabs: CourseTab[];
  order: number;
}

// Import all markdown files and meta files at build time
const markdownFiles = import.meta.glob('./courses/**/*.md', { 
  eager: true, 
  query: '?raw',
  import: 'default' 
}) as Record<string, string>;

const metaFiles = import.meta.glob('./courses/**/_meta.json', { 
  eager: true,
  import: 'default'
}) as Record<string, CourseMeta>;

// Extract title from markdown content (first H1)
function extractTitle(content: string): string {
  const match = content.match(/^#\s+(.+)$/m);
  return match ? match[1].trim() : 'Untitled';
}

// Parse file path to get course ID and file info
function parseFilePath(path: string): { courseId: string; fileName: string; order: number } | null {
  // Path format: ./courses/course-id/01-filename.md
  const match = path.match(/\.\/courses\/([^/]+)\/(\d+)-(.+)\.md$/);
  if (!match) return null;
  
  return {
    courseId: match[1],
    fileName: match[3],
    order: parseInt(match[2], 10)
  };
}

// Build courses from the file system
function buildCourses(): Course[] {
  const coursesMap = new Map<string, Course>();

  // First, process meta files to get course info
  for (const [path, module] of Object.entries(metaFiles)) {
    const courseIdMatch = path.match(/\.\/courses\/([^/]+)\/_meta\.json$/);
    if (!courseIdMatch) continue;
    
    const courseId = courseIdMatch[1];
    const meta = module as CourseMeta;
    
    coursesMap.set(courseId, {
      id: courseId,
      title: meta.title,
      description: meta.description,
      icon: meta.icon,
      order: meta.order || 0,
      tabs: []
    });
  }

  // Then, process markdown files
  for (const [path, content] of Object.entries(markdownFiles)) {
    const parsed = parseFilePath(path);
    if (!parsed) continue;

    const { courseId, fileName, order } = parsed;
    
    // Skip if we don't have meta for this course
    if (!coursesMap.has(courseId)) {
      // Create a course entry from the folder name if no meta exists
      coursesMap.set(courseId, {
        id: courseId,
        title: courseId.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase()),
        description: '',
        icon: '📚',
        order: 999,
        tabs: []
      });
    }

    const course = coursesMap.get(courseId)!;
    const title = extractTitle(content as string);
    
    course.tabs.push({
      id: fileName,
      title,
      content: content as string,
      order
    });
  }

  // Sort tabs within each course
  for (const course of coursesMap.values()) {
    course.tabs.sort((a, b) => a.order - b.order);
  }

  // Convert to array and sort by order
  return Array.from(coursesMap.values()).sort((a, b) => a.order - b.order);
}

// Export the dynamically built courses
export const courses: Course[] = buildCourses();

export function getCourse(courseId: string): Course | undefined {
  return courses.find(c => c.id === courseId);
}

export function getCourseTab(courseId: string, tabId: string): CourseTab | undefined {
  const course = getCourse(courseId);
  return course?.tabs.find(t => t.id === tabId);
}
