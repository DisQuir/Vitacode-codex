import { createBrowserRouter } from "react-router";
import { Home } from "./pages/Home";
import { Blog } from "./pages/Blog";
import { Profile } from "./pages/Profile";
import { Analysis } from "./pages/Analysis";
import { ProfileIndex } from "./pages/ProfileIndex";
import { AnalysisIndex } from "./pages/AnalysisIndex";
import { QuestionnaireStep1 } from "./pages/QuestionnaireStep1";
import { QuestionnaireStep2 } from "./pages/QuestionnaireStep2";
import { QuestionnaireStep3 } from "./pages/QuestionnaireStep3";
import { NotFound } from "./pages/NotFound";
import { Root } from "./pages/Root";
import { Auth } from "./pages/Auth";
import { ProtectedRoute } from "./components/ProtectedRoute";
import { FreePlanRoute, PremiumPlanRoute } from "./components/PlanRoute";
import { Paywall } from "./pages/Paywall";

export const router = createBrowserRouter([
  {
    path: "/",
    Component: Root,
    children: [
      { index: true, Component: Home },
      { path: "blog", Component: Blog },
      { path: "auth", Component: Auth },
      { path: "analysis", Component: AnalysisIndex },
      { path: "questionnaire/step1", Component: QuestionnaireStep1 },
      { path: "questionnaire/step2", Component: QuestionnaireStep2 },
      { path: "questionnaire/step3", Component: QuestionnaireStep3 },
      { path: "analysis/free", Component: Analysis },
      { path: "premium", Component: Paywall },
      {
        Component: ProtectedRoute,
        children: [
          { path: "profile", Component: ProfileIndex },
          {
            Component: FreePlanRoute,
            children: [
              { path: "profile/free", Component: Profile },
            ],
          },
          {
            Component: PremiumPlanRoute,
            children: [
              { path: "profile/premium", Component: Profile },
              { path: "analysis/premium", Component: Analysis },
            ],
          },
        ],
      },
      { path: "*", Component: NotFound },
    ],
  },
]);
