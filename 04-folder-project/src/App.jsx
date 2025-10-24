import { Bookmark} from "lucide-react";
import Card from "./components/Card.jsx";



const App = () => {
 const jobOpenings=  [          
  {
    "brandLogo": "https://www.microsoft.com/favicon.ico",
    "company": "Microsoft",
    " d": "5 days ago",
    "post": "Software Engineer II – Frontend",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": "$35–45/hr",
    "location": "Hyderabad, India"
  },
  {
    "brandLogo": "https://www.microsoft.com/favicon.ico",
    "company": "Microsoft",
    "datePosted": "5 days ago",
    "post": "Software Engineer – Windows Team",
    "tag1": "Full Time",
    "tag2": "Entry Level",
    "pay": "$30–40/hr",
    "location": "Hyderabad, India"
  },
  {
    "brandLogo": "https://www.google.com/favicon.ico",
    "company": "Google",
    "datePosted": "6 days ago",
    "post": "Senior Software Engineer, Accessibility",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$45–60/hr",
    "location": "Bengaluru, India"
  },
  {
    "brandLogo": "https://www.apple.com/favicon.ico",
    "company": "Apple",
    "datePosted": "N/A",
    "post": "Software Engineer – Full Stack",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": "$40–55/hr",
    "location": "Bengaluru, India"
  },
  {
    "brandLogo": "https://www.apple.com/favicon.ico",
    "company": "Apple",
    "datePosted": "60 days ago",
    "post": "Software Engineer – IS&T Team",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$50–65/hr",
    "location": "Bengaluru, India"
  },
  {
    "brandLogo": "https://www.apple.com/favicon.ico",
    "company": "Apple",
    "datePosted": "63 days ago",
    "post": "Software Engineer (Middleware)",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": "$45–60/hr",
    "location": "Hyderabad, India"
  },
  {
    "brandLogo": "https://www.microsoft.com/favicon.ico",
    "company": "Microsoft",
    "datePosted": "Today",
    "post": "Software Engineering Intern",
    "tag1": "Full Time",
    "tag2": "Internship",
    "pay": "$25/hr",
    "location": "Multiple locations, India"
  },
  {
    "brandLogo": "https://www.microsoft.com/favicon.ico",
    "company": "Microsoft",
    "datePosted": "Today",
    "post": "Principal Software Engineer – Security",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$50–70/hr",
    "location": "Hyderabad, India"
  },
  {
    "brandLogo": "https://www.microsoft.com/favicon.ico",
    "company": "Microsoft",
    "datePosted": "Today",
    "post": "Software Engineer II – Cloud & AI",
    "tag1": "Full Time",
    "tag2": "Mid Level",
    "pay": "$40–55/hr",
    "location": "Hyderabad, India"
  },
  {
    "brandLogo": "https://www.google.com/favicon.ico",
    "company": "Google",
    "datePosted": "6 days ago",
    "post": "Senior Software Engineer – YouTube Infra",
    "tag1": "Full Time",
    "tag2": "Senior Level",
    "pay": "$50–65/hr",
    "location": "Bengaluru, India"
  }
]
  return (
    <div>
      <div className="parent">
        {jobOpenings.map(function(elem){
          return <Card company={elem.company} datePosted={elem.datePosted} post={elem.post} tag1={elem.tag1} tag2={elem.tag2} pay={elem.pay} location={elem.location} />
        })}
      </div>
    </div>
  );
}

export default App;
