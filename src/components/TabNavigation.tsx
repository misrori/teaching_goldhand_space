import { cn } from "@/lib/utils";
import { CourseTab } from "@/content/courses";

interface TabNavigationProps {
  tabs: CourseTab[];
  activeTab: string;
  onTabChange: (tabId: string) => void;
}

export function TabNavigation({ tabs, activeTab, onTabChange }: TabNavigationProps) {
  return (
    <div className="border-b border-border bg-background/50 backdrop-blur-sm sticky top-0 z-10">
      <nav className="flex overflow-x-auto scrollbar-thin">
        {tabs.map((tab) => (
          <button
            key={tab.id}
            onClick={() => onTabChange(tab.id)}
            className={cn(
              "tab-item whitespace-nowrap flex-shrink-0",
              activeTab === tab.id && "tab-item-active"
            )}
          >
            {tab.title}
          </button>
        ))}
      </nav>
    </div>
  );
}
