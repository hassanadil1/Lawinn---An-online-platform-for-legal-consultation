import { Footer_Boxes } from "@/components/Footer";
import { ForumInput } from "@/components/ForumInput";
import { ForumQuestions } from "@/components/ForumScrolling";

export default function About() {
  return (
    <div className="flex min-h-screen flex-col">
      {/* Main Content */}
      <div className="flex-grow">
        <div className="mt-56 mb-10">
          <ForumInput />
        </div>
        <div className="text-center">
          <h2 className="text-2xl font-semibold text-gray-800 dark:text-gray-200">
            Explore LawInn Forums
          </h2>
          <p className="text-sm text-gray-600 dark:text-gray-400">
            Publish your question, and the LawInn community will get back to you.
          </p>
        </div>

        {/* Forum Showcase Component */}
          <ForumQuestions />

      </div>

      {/* Footer */}
      <footer className="mt-auto space-y-8">
        <Footer_Boxes />
      </footer>
    </div>
  );
}
