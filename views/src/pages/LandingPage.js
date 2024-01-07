import { useCallback } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Button } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const LandingPage = () => {
  const navigate = useNavigate();

  const onLinkClick = useCallback(() => {
    navigate("/form-page");
  }, [navigate]);

  return (
    <div className="bg-dark-nero min-h-screen text-oxford-blue font-segoe-ui">
      <div className="bg-alizarin-crimson flex flex-col items-center justify-center py-8">
        <div className="w-full max-w-7xl mx-auto">
          <img
            className="w-full h-32 object-cover"
            alt=""
            src="/svg@2x.png"
          />
        </div>
      </div>
      <div className="bg-dark-nero rounded-lg shadow-lg p-8 max-w-5xl mx-auto mt-8">
        <img
          className="w-48 h-20 object-cover mx-auto mb-8"
          alt=""
          src="/f1f78bade4684b70b7b5ec9c5fa557d2-1@2x.png"
        />
        <div className="border-b-4 border-cdcfib-career-new-account-1583x759-dark-froly mb-8"></div>
        <p className="mb-8 text-center">
          As the holding company for renowned brands like Paddy Power, Betfair,
          and FanDuel, we are on a mission to lead the online sports betting and
          gaming industry.
        </p>
        <p className="mb-8 text-center">
          Elevate your career by applying below and be part of the innovative
          force driving the future of sports betting and gaming.
        </p>
        <Button
          className="w-full md:w-auto mx-auto mb-8 cursor-pointer"
          variant="primary"
          href="/form-page"
          onClick={onLinkClick}
        >
          APPLY
        </Button>
        <p className="mb-8 text-center">
          Join our diverse team of over 13,000 talented individuals who embody
          traits such as competitiveness, agility, integrity, and an unwavering
          commitment to delivering top-notch entertainment responsibly.
        </p>
        <div className="mb-8 text-center">
          <p>
            EXPLORE AN EXCITING CAREER OPPORTUNITY WITH MOHEGAN SUN, A GLOBAL
          </p>
          <p>
            SPORTS BETTING, GAMING, AND ENTERTAINMENT POWERHOUSE SERVING
          </p>
          <p>MILLIONS WORLDWIDE.</p>
        </div>
        <p className="text-center">
          NO PRIOR EXPERIENCE REQUIRED – IF YOU'RE SMART, YOU'RE IN!
        </p>
      </div>
    </div>
  );
};

export default LandingPage;
