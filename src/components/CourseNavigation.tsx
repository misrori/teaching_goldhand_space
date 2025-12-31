import { Link, useLocation } from "react-router-dom";
import { courses } from "@/content/courses";
import { cn } from "@/lib/utils";
import { BookOpen, ChevronLeft, Menu, X } from "lucide-react";
import { useState } from "react";

export function CourseNavigation() {
  const location = useLocation();
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <>
      {/* Mobile menu button */}
      <button
        onClick={() => setMobileOpen(!mobileOpen)}
        className="lg:hidden fixed top-4 left-4 z-50 p-2 bg-sidebar-bg text-sidebar-foreground rounded-lg shadow-lg"
      >
        {mobileOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
      </button>

      {/* Overlay */}
      {mobileOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/50 z-40"
          onClick={() => setMobileOpen(false)}
        />
      )}

      {/* Sidebar */}
      <aside
        className={cn(
          "fixed lg:sticky top-0 left-0 z-40 w-72 h-screen bg-sidebar-bg border-r border-sidebar-border flex flex-col transition-transform duration-300",
          mobileOpen ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
        )}
      >
        {/* Logo */}
        <div className="p-6 border-b border-sidebar-border">
          <Link
            to="/"
            className="flex items-center gap-3 text-sidebar-foreground hover:text-white transition-colors"
            onClick={() => setMobileOpen(false)}
          >
            <div className="w-10 h-10 rounded-lg bg-primary/20 flex items-center justify-center">
              <BookOpen className="w-5 h-5 text-primary" />
            </div>
            <div>
              <h1 className="font-bold text-lg">Course Viewer</h1>
              <p className="text-xs text-sidebar-muted">Interactive Learning</p>
            </div>
          </Link>
        </div>

        {/* Navigation */}
        <nav className="flex-1 overflow-y-auto p-4 scrollbar-thin">
          <div className="space-y-2">
            <p className="text-xs font-semibold text-sidebar-muted uppercase tracking-wider px-3 mb-3">
              Courses
            </p>
            {courses.map((course) => {
              const isActive = location.pathname.startsWith(`/course/${course.id}`);
              return (
                <Link
                  key={course.id}
                  to={`/course/${course.id}`}
                  onClick={() => setMobileOpen(false)}
                  className={cn(
                    "flex items-center gap-3 px-3 py-2.5 rounded-lg transition-all duration-200",
                    isActive
                      ? "bg-sidebar-hover text-white"
                      : "text-sidebar-muted hover:text-sidebar-foreground hover:bg-sidebar-hover/50"
                  )}
                >
                  <span className="text-xl">{course.icon}</span>
                  <div className="flex-1 min-w-0">
                    <p className="font-medium truncate">{course.title}</p>
                    <p className="text-xs text-sidebar-muted truncate">
                      {course.tabs.length} lessons
                    </p>
                  </div>
                  {isActive && (
                    <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                  )}
                </Link>
              );
            })}
          </div>
        </nav>

        {/* Footer */}
        <div className="p-4 border-t border-sidebar-border">
          <div className="px-3 py-2 rounded-lg bg-sidebar-hover/50">
            <p className="text-xs text-sidebar-muted">
              Add courses in <code className="text-sidebar-foreground/70">src/content/courses/</code> with _meta.json and numbered .md files
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}
