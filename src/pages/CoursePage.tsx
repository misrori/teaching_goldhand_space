import { useParams, Navigate, useSearchParams } from "react-router-dom";
import { useEffect } from "react";
import { getCourse } from "@/content/courses";
import { CourseNavigation } from "@/components/CourseNavigation";
import { TabNavigation } from "@/components/TabNavigation";
import { TableOfContents } from "@/components/TableOfContents";
import { MarkdownRenderer } from "@/components/MarkdownRenderer";
import { ChevronRight, Home } from "lucide-react";
import { Link } from "react-router-dom";

export default function CoursePage() {
  const { courseId } = useParams<{ courseId: string }>();
  const [searchParams, setSearchParams] = useSearchParams();
  
  const course = courseId ? getCourse(courseId) : undefined;
  const activeTabId = searchParams.get("tab") || course?.tabs[0]?.id || "";
  const activeTab = course?.tabs.find((t) => t.id === activeTabId);

  useEffect(() => {
    // Scroll to top when tab changes
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [activeTabId]);

  if (!course) {
    return <Navigate to="/" replace />;
  }

  const handleTabChange = (tabId: string) => {
    setSearchParams({ tab: tabId });
  };

  return (
    <div className="flex min-h-screen bg-background">
      <CourseNavigation />
      
      <div className="flex-1 flex flex-col min-w-0">
        {/* Breadcrumb */}
        <div className="border-b border-border px-6 py-3 flex items-center gap-2 text-sm">
          <Link to="/" className="text-muted-foreground hover:text-foreground transition-colors">
            <Home className="w-4 h-4" />
          </Link>
          <ChevronRight className="w-4 h-4 text-muted-foreground" />
          <span className="text-muted-foreground">{course.icon}</span>
          <span className="font-medium text-foreground">{course.title}</span>
        </div>

        {/* Tabs */}
        <TabNavigation
          tabs={course.tabs}
          activeTab={activeTabId}
          onTabChange={handleTabChange}
        />

        {/* Content area */}
        <div className="flex-1 flex">
          <main className="flex-1 px-6 lg:px-12 py-8 max-w-4xl">
            {activeTab && <MarkdownRenderer content={activeTab.content} />}
          </main>

          {/* TOC */}
          {activeTab && <TableOfContents content={activeTab.content} />}
        </div>
      </div>
    </div>
  );
}
