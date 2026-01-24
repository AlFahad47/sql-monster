import { createBrowserRouter } from "react-router-dom";
import MainLayout from "./layouts/MainLayout";
import Home from "./pages/Home";
import StoryMode from "./pages/StoryMode";
import TsStoryMode from "./pages/TsStoryMode";
import CyberStoryMode from "./pages/CyberStoryMode";
import InterviewPrep from "./pages/InterviewPrep";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout />,
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/story",
                element: <StoryMode />,
            },
            {
                path: "/typescript",
                element: <TsStoryMode />,
            },
            {
                path: "/cyber-story",
                element: <CyberStoryMode />,
            },
            {
                path: "/interview",
                element: <InterviewPrep />,
            },
        ],
    },
]);
