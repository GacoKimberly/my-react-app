import React from "react";

export default function Skills() {
  return (
    <section
      style={{
        minHeight: "1vh",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        padding: "1px 1px",
      }}
    >
      <div
        style={{
          backgroundColor: "rgba(255, 255, 255, 0.08)",
          padding: "50px 60px",
          borderRadius: "20px",
          boxShadow: "0 8px 25px rgba(0, 0, 0, 0.2)",
          backdropFilter: "blur(8px)",
          maxWidth: "700px",
          width: "100%",
          color: "#f1eaea",
          textAlign: "center",
        }}
      >
        <h1
          style={{
            fontSize: "2.4rem",
            marginBottom: "30px",
            letterSpacing: "1.5px",
            textTransform: "uppercase",
            color: "#fff",
          }}
        >
          My Skills
        </h1>

        <ul
          style={{
            listStyleType: "none",
            padding: 0,
            margin: 0,
            fontSize: "1.1rem",
            lineHeight: "2",
            textAlign: "left",
          }}
        >
          <li
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              padding: "12px 18px",
              borderRadius: "10px",
              marginBottom: "12px",
              transition: "transform 0.2s ease, background-color 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.15)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)")
            }
          >
            Basic HTML, CSS, and JavaScript
          </li>
          <li
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              padding: "12px 18px",
              borderRadius: "10px",
              marginBottom: "12px",
              transition: "transform 0.2s ease, background-color 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.15)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)")
            }
          >
            Familiar with React.js fundamentals
          </li>
          <li
            style={{
              backgroundColor: "rgba(231, 41, 41, 0.05)",
              padding: "12px 18px",
              borderRadius: "10px",
              marginBottom: "12px",
              transition: "transform 0.2s ease, background-color 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.15)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)")
            }
          >
            Knowledge of computer hardware and a little bit troubleshooting
          </li>
          <li
            style={{
              backgroundColor: "rgba(255, 255, 255, 0.05)",
              padding: "12px 18px",
              borderRadius: "10px",
              marginBottom: "12px",
              transition: "transform 0.2s ease, background-color 0.3s ease",
            }}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.15)")
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "rgba(255, 255, 255, 0.05)")
            }
          >
            Willingness to learn and adapt to new technologies
          </li>
        </ul>
      </div>
    </section>
  );
}
