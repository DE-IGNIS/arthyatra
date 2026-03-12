import { useState, useEffect } from "react";
import { supabase } from "../utils/supabase";

export default function SignUp() {
  const [loading, setLoading] = useState(false);
  const [email, setEmail] = useState("");
  const [claims, setClaims] = useState(null);

  // Check URL params on initial render
  const params = new URLSearchParams(window.location.search);
  const hasTokenHash = params.get("token_hash");

  const [verifying, setVerifying] = useState(!!hasTokenHash);
  const [authError, setAuthError] = useState(null);
  const [authSuccess, setAuthSuccess] = useState(false);

  useEffect(() => {
    // Check if we have token_hash in URL (magic link callback)
    const params = new URLSearchParams(window.location.search);
    const token_hash = params.get("token_hash");
    const type = params.get("type");

    if (token_hash) {
      // Verify the OTP token
      supabase.auth
        .verifyOtp({
          token_hash,
          type: type || "email",
        })
        .then(({ error }) => {
          if (error) {
            setAuthError(error.message);
          } else {
            setAuthSuccess(true);
            // Clear URL params
            window.history.replaceState({}, document.title, "/");
          }
          setVerifying(false);
        });
    }

    // Check for existing session using getClaims
    supabase.auth.getClaims().then(({ data: { claims } }) => {
      setClaims(claims);
    });

    // Listen for auth changes
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange(() => {
      supabase.auth.getClaims().then(({ data: { claims } }) => {
        setClaims(claims);
      });
    });

    return () => subscription.unsubscribe();
  }, []);

  const handleLogin = async (event) => {
    event.preventDefault();
    setLoading(true);
    const { error } = await supabase.auth.signInWithOtp({
      email,
      options: {
        emailRedirectTo: window.location.origin,
      },
    });
    if (error) {
      alert(error.error_description || error.message);
    } else {
      alert("Check your email for the login link!");
    }
    setLoading(false);
  };

  const handleLogout = async () => {
    await supabase.auth.signOut();
    setClaims(null);
  };

  // Show verification state
  if (verifying) {
    return (
      <div className="warmLayout">
        <style>{`
          .warmLayout {
            --warm-primary: #C77D3E;
            --warm-light: #F5E6D3;
            --warm-lighter: #FBF7F2;
            --warm-accent: #D4A574;
            --warm-dark: #3F2B1F;
            --warm-muted: #8B6F47;
            --warm-success: #9D8B5B;
            
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #FBF7F2 0%, #F5E6D3 100%);
            font-family: 'Georgia', serif;
            padding: 20px;
          }

          .warmCard {
            background: white;
            border-radius: 16px;
            padding: 48px 40px;
            max-width: 420px;
            width: 100%;
            box-shadow: 0 8px 32px rgba(199, 125, 62, 0.08), 
                        0 2px 8px rgba(63, 43, 31, 0.06);
            border: 1px solid rgba(212, 165, 116, 0.15);
            animation: slideIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          }

          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .warmTitle {
            font-size: 28px;
            color: var(--warm-dark);
            margin: 0 0 12px 0;
            font-weight: 700;
            letter-spacing: -0.5px;
          }

          .warmSubtitle {
            font-size: 16px;
            color: var(--warm-muted);
            margin: 0 0 32px 0;
            line-height: 1.5;
            font-weight: 400;
          }

          .warmSpinner {
            width: 40px;
            height: 40px;
            border: 3px solid var(--warm-light);
            border-top-color: var(--warm-primary);
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 0 auto 24px;
          }

          @keyframes spin {
            to { transform: rotate(360deg); }
          }

          .warmMessage {
            text-align: center;
            padding: 20px;
            background: rgba(212, 165, 116, 0.05);
            border-radius: 12px;
            color: var(--warm-muted);
            font-size: 15px;
            line-height: 1.6;
          }
        `}</style>
        <div className="warmCard">
          <h1 className="warmTitle">Verifying</h1>
          <p className="warmSubtitle">Confirming your magic link...</p>
          <div className="warmSpinner"></div>
          <div className="warmMessage">
            <p>Please wait while we authenticate your request</p>
          </div>
        </div>
      </div>
    );
  }

  // Show auth error
  if (authError) {
    return (
      <div className="warmLayout">
        <style>{`
          .warmLayout {
            --warm-primary: #C77D3E;
            --warm-light: #F5E6D3;
            --warm-lighter: #FBF7F2;
            --warm-accent: #D4A574;
            --warm-dark: #3F2B1F;
            --warm-muted: #8B6F47;
            --warm-error: #B85C4F;
            
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #FBF7F2 0%, #F5E6D3 100%);
            font-family: 'Georgia', serif;
            padding: 20px;
          }

          .warmCard {
            background: white;
            border-radius: 16px;
            padding: 48px 40px;
            max-width: 420px;
            width: 100%;
            box-shadow: 0 8px 32px rgba(199, 125, 62, 0.08), 
                        0 2px 8px rgba(63, 43, 31, 0.06);
            border: 1px solid rgba(212, 165, 116, 0.15);
            animation: slideIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          }

          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .warmTitle {
            font-size: 28px;
            color: var(--warm-dark);
            margin: 0 0 12px 0;
            font-weight: 700;
            letter-spacing: -0.5px;
          }

          .warmSubtitle {
            font-size: 16px;
            color: var(--warm-muted);
            margin: 0 0 32px 0;
            line-height: 1.5;
            font-weight: 400;
          }

          .warmErrorBanner {
            background: linear-gradient(135deg, #FBF3F0 0%, #F5E8E3 100%);
            border: 1px solid rgba(184, 92, 79, 0.2);
            border-left: 4px solid var(--warm-error);
            border-radius: 12px;
            padding: 16px;
            margin-bottom: 24px;
            animation: shake 0.5s ease-in-out;
          }

          @keyframes shake {
            0%, 100% { transform: translateX(0); }
            25% { transform: translateX(-8px); }
            75% { transform: translateX(8px); }
          }

          .warmErrorIcon {
            font-size: 24px;
            margin-bottom: 8px;
          }

          .warmErrorText {
            color: var(--warm-error);
            font-size: 14px;
            line-height: 1.5;
            margin: 0;
          }

          .warmBtn {
            width: 100%;
            padding: 12px 24px;
            background: var(--warm-primary);
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            font-family: 'Georgia', serif;
            margin-top: 16px;
          }

          .warmBtn:hover {
            background: #B87137;
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(199, 125, 62, 0.25);
          }

          .warmBtn:active {
            transform: translateY(0);
          }
        `}</style>
        <div className="warmCard">
          <h1 className="warmTitle">Authentication Failed</h1>
          <p className="warmSubtitle">Something went wrong</p>
          <div className="warmErrorBanner">
            <div className="warmErrorIcon">✗</div>
            <p className="warmErrorText">{authError}</p>
          </div>
          <button
            className="warmBtn"
            onClick={() => {
              setAuthError(null);
              window.history.replaceState({}, document.title, "/");
            }}
          >
            Return to Login
          </button>
        </div>
      </div>
    );
  }

  // Show auth success (briefly before claims load)
  if (authSuccess && !claims) {
    return (
      <div className="warmLayout">
        <style>{`
          .warmLayout {
            --warm-primary: #C77D3E;
            --warm-light: #F5E6D3;
            --warm-lighter: #FBF7F2;
            --warm-accent: #D4A574;
            --warm-dark: #3F2B1F;
            --warm-muted: #8B6F47;
            --warm-success: #9D8B5B;
            
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #FBF7F2 0%, #F5E6D3 100%);
            font-family: 'Georgia', serif;
            padding: 20px;
          }

          .warmCard {
            background: white;
            border-radius: 16px;
            padding: 48px 40px;
            max-width: 420px;
            width: 100%;
            box-shadow: 0 8px 32px rgba(199, 125, 62, 0.08), 
                        0 2px 8px rgba(63, 43, 31, 0.06);
            border: 1px solid rgba(212, 165, 116, 0.15);
            animation: slideIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          }

          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .warmTitle {
            font-size: 28px;
            color: var(--warm-dark);
            margin: 0 0 12px 0;
            font-weight: 700;
            letter-spacing: -0.5px;
          }

          .warmSubtitle {
            font-size: 16px;
            color: var(--warm-muted);
            margin: 0 0 32px 0;
            line-height: 1.5;
            font-weight: 400;
          }

          .warmSuccessBanner {
            background: linear-gradient(135deg, #F5FAF0 0%, #EFF8EA 100%);
            border: 1px solid rgba(157, 139, 91, 0.2);
            border-left: 4px solid var(--warm-success);
            border-radius: 12px;
            padding: 20px;
            margin-bottom: 24px;
            text-align: center;
            animation: slideUp 0.6s ease-out;
          }

          @keyframes slideUp {
            from {
              opacity: 0;
              transform: translateY(10px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .warmCheckmark {
            font-size: 36px;
            margin-bottom: 12px;
            display: block;
          }

          .warmSuccessText {
            color: var(--warm-success);
            font-size: 15px;
            line-height: 1.6;
            margin: 0;
          }

          .warmSpinner {
            width: 36px;
            height: 36px;
            border: 3px solid var(--warm-light);
            border-top-color: var(--warm-primary);
            border-radius: 50%;
            animation: spin 1s linear infinite;
            margin: 20px auto;
          }

          @keyframes spin {
            to { transform: rotate(360deg); }
          }
        `}</style>
        <div className="warmCard">
          <h1 className="warmTitle">Success!</h1>
          <p className="warmSubtitle">Welcome back</p>
          <div className="warmSuccessBanner">
            <span className="warmCheckmark">✓</span>
            <p className="warmSuccessText">
              Authentication successful! Loading your account...
            </p>
          </div>
          <div className="warmSpinner"></div>
        </div>
      </div>
    );
  }

  // If user is logged in, show welcome screen
  if (claims) {
    return (
      <div className="warmLayout">
        <style>{`
          .warmLayout {
            --warm-primary: #C77D3E;
            --warm-light: #F5E6D3;
            --warm-lighter: #FBF7F2;
            --warm-accent: #D4A574;
            --warm-dark: #3F2B1F;
            --warm-muted: #8B6F47;
            
            min-height: 100vh;
            display: flex;
            align-items: center;
            justify-content: center;
            background: linear-gradient(135deg, #FBF7F2 0%, #F5E6D3 100%);
            font-family: 'Georgia', serif;
            padding: 20px;
          }

          .warmCard {
            background: white;
            border-radius: 16px;
            padding: 48px 40px;
            max-width: 420px;
            width: 100%;
            box-shadow: 0 8px 32px rgba(199, 125, 62, 0.08), 
                        0 2px 8px rgba(63, 43, 31, 0.06);
            border: 1px solid rgba(212, 165, 116, 0.15);
            animation: slideIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
          }

          @keyframes slideIn {
            from {
              opacity: 0;
              transform: translateY(20px);
            }
            to {
              opacity: 1;
              transform: translateY(0);
            }
          }

          .warmTitle {
            font-size: 28px;
            color: var(--warm-dark);
            margin: 0 0 8px 0;
            font-weight: 700;
            letter-spacing: -0.5px;
          }

          .warmUserInfo {
            background: linear-gradient(135deg, #F9F3E9 0%, #F5F0E8 100%);
            border: 1px solid rgba(212, 165, 116, 0.2);
            border-radius: 12px;
            padding: 20px;
            margin: 24px 0;
            text-align: center;
          }

          .warmUserLabel {
            font-size: 13px;
            color: var(--warm-muted);
            text-transform: uppercase;
            letter-spacing: 1px;
            margin-bottom: 8px;
            font-weight: 600;
          }

          .warmUserEmail {
            font-size: 16px;
            color: var(--warm-dark);
            margin: 0;
            word-break: break-all;
            font-weight: 500;
          }

          .warmBtn {
            width: 100%;
            padding: 12px 24px;
            background: var(--warm-primary);
            color: white;
            border: none;
            border-radius: 10px;
            font-size: 16px;
            font-weight: 600;
            cursor: pointer;
            transition: all 0.3s ease;
            font-family: 'Georgia', serif;
          }

          .warmBtn:hover {
            background: #B87137;
            transform: translateY(-2px);
            box-shadow: 0 6px 20px rgba(199, 125, 62, 0.25);
          }

          .warmBtn:active {
            transform: translateY(0);
          }
        `}</style>
        <div className="warmCard">
          <h1 className="warmTitle">Welcome!</h1>
          <div className="warmUserInfo">
            <div className="warmUserLabel">Logged in as</div>
            <p className="warmUserEmail">{claims.email}</p>
          </div>
          <button className="warmBtn" onClick={handleLogout}>
            Sign Out
          </button>
        </div>
      </div>
    );
  }

  // Show login form
  return (
    <div className="warmLayout">
      <style>{`
        .warmLayout {
          --warm-primary: #C77D3E;
          --warm-light: #F5E6D3;
          --warm-lighter: #FBF7F2;
          --warm-accent: #D4A574;
          --warm-dark: #3F2B1F;
          --warm-muted: #8B6F47;
          
          min-height: 100vh;
          display: flex;
          align-items: center;
          justify-content: center;
          background: linear-gradient(135deg, #FBF7F2 0%, #F5E6D3 100%);
          font-family: 'Georgia', serif;
          padding: 20px;
        }

        .warmCard {
          background: white;
          border-radius: 16px;
          padding: 48px 40px;
          max-width: 420px;
          width: 100%;
          box-shadow: 0 8px 32px rgba(199, 125, 62, 0.08), 
                      0 2px 8px rgba(63, 43, 31, 0.06);
          border: 1px solid rgba(212, 165, 116, 0.15);
          animation: slideIn 0.5s cubic-bezier(0.34, 1.56, 0.64, 1);
        }

        @keyframes slideIn {
          from {
            opacity: 0;
            transform: translateY(20px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }

        .warmTitle {
          font-size: 32px;
          color: var(--warm-dark);
          margin: 0 0 8px 0;
          font-weight: 700;
          letter-spacing: -0.5px;
        }

        .warmSubtitle {
          font-size: 16px;
          color: var(--warm-muted);
          margin: 0 0 32px 0;
          line-height: 1.5;
          font-weight: 400;
        }

        .warmForm {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .warmInput {
          padding: 14px 16px;
          border: 1.5px solid var(--warm-light);
          border-radius: 10px;
          font-size: 16px;
          font-family: 'Georgia', serif;
          background: linear-gradient(135deg, #FEFBF8 0%, #FBF9F6 100%);
          color: var(--warm-dark);
          transition: all 0.3s ease;
        }

        .warmInput::placeholder {
          color: var(--warm-muted);
          opacity: 0.7;
        }

        .warmInput:focus {
          outline: none;
          border-color: var(--warm-primary);
          background: white;
          box-shadow: 0 0 0 3px rgba(199, 125, 62, 0.08);
        }

        .warmBtn {
          padding: 14px 24px;
          background: var(--warm-primary);
          color: white;
          border: none;
          border-radius: 10px;
          font-size: 16px;
          font-weight: 600;
          cursor: pointer;
          transition: all 0.3s ease;
          font-family: 'Georgia', serif;
          letter-spacing: 0.3px;
          margin-top: 8px;
        }

        .warmBtn:hover:not(:disabled) {
          background: #B87137;
          transform: translateY(-2px);
          box-shadow: 0 6px 20px rgba(199, 125, 62, 0.25);
        }

        .warmBtn:active:not(:disabled) {
          transform: translateY(0);
        }

        .warmBtn:disabled {
          opacity: 0.7;
          cursor: not-allowed;
          background: var(--warm-accent);
        }

        .warmFeatures {
          margin-top: 32px;
          padding-top: 24px;
          border-top: 1px solid var(--warm-light);
          display: flex;
          gap: 16px;
        }

        .warmFeature {
          flex: 1;
          text-align: center;
        }

        .warmFeatureIcon {
          font-size: 24px;
          margin-bottom: 8px;
        }

        .warmFeatureText {
          font-size: 12px;
          color: var(--warm-muted);
          line-height: 1.4;
          margin: 0;
        }
      `}</style>
      <div className="warmCard">
        <h1 className="warmTitle">Welcome</h1>
        <p className="warmSubtitle">Sign in with your email</p>

        <form onSubmit={handleLogin} className="warmForm">
          <input
            className="warmInput"
            type="email"
            placeholder="your.email@example.com"
            value={email}
            required={true}
            onChange={(e) => setEmail(e.target.value)}
          />
          <button className="warmBtn" disabled={loading}>
            {loading ? <span>Sending...</span> : <span>Send Magic Link</span>}
          </button>
        </form>

        <div className="warmFeatures">
          <div className="warmFeature">
            <div className="warmFeatureIcon">🔐</div>
            <p className="warmFeatureText">Secure</p>
          </div>
          <div className="warmFeature">
            <div className="warmFeatureIcon">⚡</div>
            <p className="warmFeatureText">Passwordless</p>
          </div>
          <div className="warmFeature">
            <div className="warmFeatureIcon">✨</div>
            <p className="warmFeatureText">Magic Link</p>
          </div>
        </div>
      </div>
    </div>
  );
}
