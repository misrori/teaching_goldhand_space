import { Link } from "react-router-dom";
import { courses } from "@/content/courses";
import { BookOpen, ArrowRight, Sparkles } from "lucide-react";

export default function Index() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <header className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
        <div className="relative max-w-6xl mx-auto px-6 py-20 lg:py-32">
          <div className="text-center animate-fade-in">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary/10 text-primary text-sm font-medium mb-6">
              <Sparkles className="w-4 h-4" />
              Interactive Learning Platform
            </div>
            <h1 className="text-4xl lg:text-6xl font-bold text-foreground mb-6">
              Master{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">
                Data Engineering
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto mb-10">
              Explore comprehensive courses on Python, Apache Spark, and Delta Lake. 
              Learn at your own pace with interactive content and hands-on examples.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                to={`/course/${courses[0].id}`}
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Start Learning
                <ArrowRight className="w-4 h-4" />
              </Link>
              <a
                href="#courses"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 rounded-lg border border-border text-foreground font-medium hover:bg-muted transition-colors"
              >
                Browse Courses
              </a>
            </div>
          </div>
        </div>
      </header>

      {/* Courses Section */}
      <section id="courses" className="max-w-6xl mx-auto px-6 py-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold text-foreground mb-4">
            Available Courses
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Choose from our curated selection of data engineering courses designed 
            for both beginners and experienced developers.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {courses.map((course, index) => (
            <Link
              key={course.id}
              to={`/course/${course.id}`}
              className="group relative bg-card border border-border rounded-xl p-6 hover:border-primary/50 hover:shadow-lg hover:shadow-primary/5 transition-all duration-300 animate-fade-in"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-transparent rounded-bl-full opacity-0 group-hover:opacity-100 transition-opacity" />
              
              <div className="relative">
                <div className="w-14 h-14 rounded-xl bg-muted flex items-center justify-center text-3xl mb-4 group-hover:scale-110 transition-transform">
                  {course.icon}
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-2 group-hover:text-primary transition-colors">
                  {course.title}
                </h3>
                
                <p className="text-muted-foreground mb-4">
                  {course.description}
                </p>
                
                <div className="flex items-center justify-between">
                  <span className="text-sm text-muted-foreground">
                    {course.tabs.length} lessons
                  </span>
                  <span className="inline-flex items-center gap-1 text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    Start Course
                    <ArrowRight className="w-4 h-4" />
                  </span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-muted/30 border-y border-border">
        <div className="max-w-6xl mx-auto px-6 py-20">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <BookOpen className="w-6 h-6 text-primary" />
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Interactive Content
              </h3>
              <p className="text-muted-foreground text-sm">
                Learn with beautifully rendered Markdown content, code examples, and quizzes.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg bg-accent/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-accent" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h7" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Smart Navigation
              </h3>
              <p className="text-muted-foreground text-sm">
                Auto-generated table of contents with smooth scrolling to any section.
              </p>
            </div>
            <div className="text-center">
              <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mx-auto mb-4">
                <svg className="w-6 h-6 text-primary" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
                </svg>
              </div>
              <h3 className="text-lg font-semibold text-foreground mb-2">
                Easy to Extend
              </h3>
              <p className="text-muted-foreground text-sm">
                Add new courses by simply creating folders with Markdown files.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
          <div className="flex items-center gap-2">
            <BookOpen className="w-5 h-5 text-primary" />
            <span className="font-medium text-foreground">Course Viewer</span>
          </div>
          <p>Interactive Markdown-based learning platform</p>
        </div>
      </footer>
    </div>
  );
}
