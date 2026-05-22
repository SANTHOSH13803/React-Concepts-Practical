import { useState } from "react";

function ConceptTabs({
  title = "Important Concepts",

  concepts = []
}) {
  const [activeIndex, setActiveIndex] = useState(0);

  const active = concepts?.[activeIndex];
  return (
    <div
      className="
bg-white
border
rounded-xl
shadow-sm
overflow-hidden mb-3
"
    >
      {/* Header */}

      <div
        className="
px-6
py-4
border-b
font-bold
text-xl
"
      >
        {title}
      </div>

      {/* Tabs */}

      <div
        className="
flex
gap-2
p-4
overflow-x-auto
border-b
"
      >
        {concepts.map((item, index) => (
          <button
            key={item?.name}
            onClick={() => setActiveIndex(index)}
            className={`
px-4
py-2
rounded
text-sm
shrink-0

${active?.name === item?.name ? "bg-blue-500 text-white" : "bg-gray-100"}

`}
          >
            {item?.name}
          </button>
        ))}
      </div>

      {/* Content */}

      <div
        className="
p-6
space-y-5
"
      >
        {/* Snippet */}
        {active?.snippet && (
          <div>
            <h4
              className="
font-semibold
mb-2
"
            >
              Snippet
            </h4>

            <pre
              className="
bg-slate-900
text-white
p-4
rounded
overflow-auto
"
            >
              <code>{active?.snippet}</code>
            </pre>
          </div>
        )}

        {/* Description */}
        {active?.description && (
          <div>
            <h4
              className="
font-semibold
mb-2
"
            >
              Description
            </h4>

            <p>{active?.description}</p>
          </div>
        )}

        {/* Remember */}

        {active?.points && (
          <div>
            <h4
              className="
font-semibold
mb-2
"
            >
              {active.pointsHeader ?? "Remember"}
            </h4>

            <ul
              className="
list-disc
pl-5
space-y-2
"
            >
              {active?.points.map((point) => (
                <li key={point}>{point}</li>
              ))}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default ConceptTabs;
