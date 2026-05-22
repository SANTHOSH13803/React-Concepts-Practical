import ConceptTabs from "../../../Preview/ConceptTabs";

function ContextConcepts() {
  const concepts = [
    {
      name: "createContext",

      snippet: `const UserContext = createContext();
`,

      description: "Creates a context object for sharing values globally.",

      points: [
        "Define outside component",

        "Export context",

        "Import where needed"
      ]
    },

    {
      name: "Provider",

      snippet: `
<UserContext.Provider value={user}>
  <App/>
</UserContext.Provider>
`,

      description: "Provides values to all nested children.",

      points: [
        "Wrap parent component",

        "Pass value prop",

        "Children can access"
      ]
    },

    {
      name: "useContext",

      snippet: `const user = useContext(UserContext);
`,

      description: "Consumes context values without prop drilling.",

      points: ["Must be inside Provider", "Returns current value"]
    },

    {
      name: "Limitations",
      points: [
        "When Provider value changes all components will re-render",
        "Performance Concerns - works well for themes,auth user, locale. Not best for large data, input typing, Frequent notifications (Why?? Many components will re-render)"
      ],
      pointsHeader: "Limitations"
    }
  ];

  return <ConceptTabs title="Context API Concepts" concepts={concepts} />;
}

export default ContextConcepts;
