import React, { useRef } from 'react';
import './App.css'; 
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const students = [
  {
    "Name": "John Doe",
    "RegNo": "20230001",
    "EMail": "john.doe@example.com",
    "PhoneNumber": "1234567890",
    "Qualification": "B.Sc",
    "InterestedRoles": "Web Developer, Data Analyst",
    "Photo": "https://example.com/photos/johndoe.jpg",
    "CV": "https://example.com/cv/johndoe.pdf",
    "LinkedIn": "https://www.linkedin.com/in/johndoe",
    "Github": "https://github.com/johndoe"
  },
  {
    "Name": "Jane Smith",
    "RegNo": "20230002",
    "EMail": "jane.smith@example.com",
    "PhoneNumber": "9876543210",
    "Qualification": "M.Tech",
    "InterestedRoles": "Software Engineer, Machine Learning Specialist",
    "Photo": "https://example.com/photos/janesmith.jpg",
    "CV": "https://example.com/cv/janesmith.pdf",
    "LinkedIn": "https://www.linkedin.com/in/janesmith",
    "Github": "https://github.com/janesmith"
  },
  {
    "Name": "Alice Johnson",
    "RegNo": "20230003",
    "EMail": "alice.johnson@example.com",
    "PhoneNumber": "5551234567",
    "Qualification": "B.E",
    "InterestedRoles": "Front-end Developer, UI/UX Designer",
    "Photo": "https://example.com/photos/alicejohnson.jpg",
    "CV": "https://example.com/cv/alicejohnson.pdf",
    "LinkedIn": "https://www.linkedin.com/in/alicejohnson",
    "Github": "https://github.com/alicejohnson"
  },
  {
    "Name": "Bob Anderson",
    "RegNo": "20230004",
    "EMail": "bob.anderson@example.com",
    "PhoneNumber": "8765432109",
    "Qualification": "Ph.D",
    "InterestedRoles": "Data Scientist, Researcher",
    "Photo": "https://example.com/photos/bobanderson.jpg",
    "CV": "https://example.com/cv/bobanderson.pdf",
    "LinkedIn": "https://www.linkedin.com/in/bobanderson",
    "Github": "https://github.com/bobanderson"
  },
  {
    "Name": "Emily Brown",
    "RegNo": "20230005",
    "EMail": "emily.brown@example.com",
    "PhoneNumber": "2345678901",
    "Qualification": "B.A",
    "InterestedRoles": "Content Writer, Social Media Manager",
    "Photo": "https://example.com/photos/emilybrown.jpg",
    "CV": "https://example.com/cv/emilybrown.pdf",
    "LinkedIn": "https://www.linkedin.com/in/emilybrown",
    "Github": "https://github.com/emilybrown"
  },
  {
    "Name": "Chris Evans",
    "RegNo": "20230006",
    "EMail": "chris.evans@example.com",
    "PhoneNumber": "7654321098",
    "Qualification": "M.Sc",
    "InterestedRoles": "Database Administrator, Backend Developer",
    "Photo": "https://example.com/photos/chrisevans.jpg",
    "CV": "https://example.com/cv/chrisevans.pdf",
    "LinkedIn": "https://www.linkedin.com/in/chrisevans",
    "Github": "https://github.com/chrisevans"
  },
  {
    "Name": "Olivia White",
    "RegNo": "20230007",
    "EMail": "olivia.white@example.com",
    "PhoneNumber": "8765432109",
    "Qualification": "B.Tech",
    "InterestedRoles": "Cybersecurity Analyst, Ethical Hacker",
    "Photo": "https://example.com/photos/oliviawhite.jpg",
    "CV": "https://example.com/cv/oliviawhite.pdf",
    "LinkedIn": "https://www.linkedin.com/in/oliviawhite",
    "Github": "https://github.com/oliviawhite"
  },
  {
    "Name": "Daniel Garcia",
    "RegNo": "20230008",
    "EMail": "daniel.garcia@example.com",
    "PhoneNumber": "1234567890",
    "Qualification": "M.E",
    "InterestedRoles": "DevOps Engineer, Cloud Architect",
    "Photo": "https://example.com/photos/danielgarcia.jpg",
    "CV": "https://example.com/cv/danielgarcia.pdf",
    "LinkedIn": "https://www.linkedin.com/in/danielgarcia",
    "Github": "https://github.com/danielgarcia"
  },
  {
    "Name": "Sophia Miller",
    "RegNo": "20230009",
    "EMail": "sophia.miller@example.com",
    "PhoneNumber": "9876543210",
    "Qualification": "B.Com",
    "InterestedRoles": "Financial Analyst, Business Intelligence",
    "Photo": "https://example.com/photos/sophiamiller.jpg",
    "CV": "https://example.com/cv/sophiamiller.pdf",
    "LinkedIn": "https://www.linkedin.com/in/sophiamiller",
    "Github": "https://github.com/sophiamiller"
  },
  {
    "Name": "Liam Taylor",
    "RegNo": "20230010",
    "EMail": "liam.taylor@example.com",
    "PhoneNumber": "5551234567",
    "Qualification": "B.Arch",
    "InterestedRoles": "Architect, 3D Modeler",
    "Photo": "https://example.com/photos/liamtaylor.jpg",
    "CV": "https://example.com/cv/liamtaylor.pdf",
    "LinkedIn": "https://www.linkedin.com/in/liamtaylor",
    "Github": "https://github.com/liamtaylor"
  },
  {
    "Name": "Ethan Turner",
    "RegNo": "20230011",
    "EMail": "ethan.turner@example.com",
    "PhoneNumber": "1234567890",
    "Qualification": "B.Sc",
    "InterestedRoles": "Software Developer, Game Developer",
    "Photo": "https://example.com/photos/ethanturner.jpg",
    "CV": "https://example.com/cv/ethanturner.pdf",
    "LinkedIn": "https://www.linkedin.com/in/ethanturner",
    "Github": "https://github.com/ethanturner"
  },
  {
    "Name": "Ava Scott",
    "RegNo": "20230012",
    "EMail": "ava.scott@example.com",
    "PhoneNumber": "9876543210",
    "Qualification": "MBA",
    "InterestedRoles": "Marketing Specialist, Sales Analyst",
    "Photo": "https://example.com/photos/avascott.jpg",
    "CV": "https://example.com/cv/avascott.pdf",
    "LinkedIn": "https://www.linkedin.com/in/avascott",
    "Github": "https://github.com/avascott"
  },
  {
    "Name": "Mason Hill",
    "RegNo": "20230013",
    "EMail": "mason.hill@example.com",
    "PhoneNumber": "5551234567",
    "Qualification": "B.E",
    "InterestedRoles": "Embedded Systems Engineer, Robotics Developer",
    "Photo": "https://example.com/photos/masonhill.jpg",
    "CV": "https://example.com/cv/masonhill.pdf",
    "LinkedIn": "https://www.linkedin.com/in/masonhill",
    "Github": "https://github.com/masonhill"
  },
  {
    "Name": "Scarlett King",
    "RegNo": "20230014",
    "EMail": "scarlett.king@example.com",
    "PhoneNumber": "8765432109",
    "Qualification": "B.A",
    "InterestedRoles": "Content Strategist, Social Media Manager",
    "Photo": "https://example.com/photos/scarlettking.jpg",
    "CV": "https://example.com/cv/scarlettking.pdf",
    "LinkedIn": "https://www.linkedin.com/in/scarlettking",
    "Github": "https://github.com/scarlettking"
  },
  {
    "Name": "Henry Wilson",
    "RegNo": "20230015",
    "EMail": "henry.wilson@example.com",
    "PhoneNumber": "2345678901",
    "Qualification": "M.Tech",
    "InterestedRoles": "AI Engineer, Data Scientist",
    "Photo": "https://example.com/photos/henrywilson.jpg",
    "CV": "https://example.com/cv/henrywilson.pdf",
    "LinkedIn": "https://www.linkedin.com/in/henrywilson",
    "Github": "https://github.com/henrywilson"
  },
  {
    "Name": "Amelia Garcia",
    "RegNo": "20230016",
    "EMail": "amelia.garcia@example.com",
    "PhoneNumber": "7654321098",
    "Qualification": "B.Com",
    "InterestedRoles": "Financial Analyst, Business Intelligence",
    "Photo": "https://example.com/photos/ameliagarcia.jpg",
    "CV": "https://example.com/cv/ameliagarcia.pdf",
    "LinkedIn": "https://www.linkedin.com/in/ameliagarcia",
    "Github": "https://github.com/ameliagarcia"
  },
  {
    "Name": "Logan Cooper",
    "RegNo": "20230017",
    "EMail": "logan.cooper@example.com",
    "PhoneNumber": "8765432109",
    "Qualification": "B.Tech",
    "InterestedRoles": "Network Engineer, Cybersecurity Specialist",
    "Photo": "https://example.com/photos/logancooper.jpg",
    "CV": "https://example.com/cv/logancooper.pdf",
    "LinkedIn": "https://www.linkedin.com/in/logancooper",
    "Github": "https://github.com/logancooper"
  },
  {
    "Name": "Grace Martinez",
    "RegNo": "20230018",
    "EMail": "grace.martinez@example.com",
    "PhoneNumber": "1234567890",
    "Qualification": "M.E",
    "InterestedRoles": "Systems Analyst, DevOps Engineer",
    "Photo": "https://example.com/photos/gracemartinez.jpg",
    "CV": "https://example.com/cv/gracemartinez.pdf",
    "LinkedIn": "https://www.linkedin.com/in/gracemartinez",
    "Github": "https://github.com/gracemartinez"
  },
  {
    "Name": "Owen Taylor",
    "RegNo": "20230019",
    "EMail": "owen.taylor@example.com",
    "PhoneNumber": "9876543210",
    "Qualification": "B.Arch",
    "InterestedRoles": "Architect, 3D Modeler",
    "Photo": "https://example.com/photos/owentaylor.jpg",
    "CV": "https://example.com/cv/owentaylor.pdf",
    "LinkedIn": "https://www.linkedin.com/in/owentaylor",
    "Github": "https://github.com/owentaylor"
  },
  {
    "Name": "Ella Turner",
    "RegNo": "20230020",
    "EMail": "ella.turner@example.com",
    "PhoneNumber": "5551234567",
    "Qualification": "B.Sc",
    "InterestedRoles": "UI/UX Designer, Front-end Developer",
    "Photo": "https://example.com/photos/ellaturner.jpg",
    "CV": "https://example.com/cv/ellaturner.pdf",
    "LinkedIn": "https://www.linkedin.com/in/ellaturner",
    "Github": "https://github.com/ellaturner"
  }
];
const App = () => {
  const tableRef = useRef();

  const downloadAsPDF = () => {
    const input = tableRef.current;

    html2canvas(input).then((canvas) => {
      const pdf = new jsPDF('p', 'mm', 'a4');
      pdf.addImage(canvas.toDataURL('image/png'), 'PNG', 0, 0, 210, 297);
      pdf.save('table.pdf');
    });
  };

  return (
    <div className="app-container">
      <div className="scrollable-container" ref={tableRef}>
        {/* <table className="student-table">
          <thead>
            <tr>
              <th className="fixed-column">Photo</th>
              <th className="fixed-column">Name</th>
              <th>Reg. No</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Qualification</th>
              <th>Interested Roles</th>
              <th></th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {students.map((student, index) => (
              <tr key={index}>
                <td className="fixed-column"><img src={student.Photo} alt="Profile" className="profile-img" /></td>
                <td className="fixed-column bold-text">{student.Name}</td>
                <td>{student.RegNo}</td>
                <td>{student.EMail}</td>
                <td>{student.PhoneNumber}</td>
                <td>{student.Qualification}</td>
                <td>{student.InterestedRoles}</td>
                <td className="small-padding"><a href={student.LinkedIn} target="_blank" rel="noopener noreferrer" className="contact-link">{student.LinkedIn}</a></td>
                <td className="small-padding"><a href={student.Github} target="_blank" rel="noopener noreferrer" className="contact-link">{student.Github}</a></td>
              </tr>
            ))}
          </tbody>
        </table> */}
       <div class="student-cards">
  {students.map((student, index) => (
    <div class="student-card" key={index}>
      <div class="card-header">
        <img src={student.Photo} alt="Profile" class="profile-img" />
        <h3 class="bold-text">{student.Name}</h3>
      </div>
      <div class="card-body">
        <p><strong>Reg. No:</strong> {student.RegNo}</p>
        <p><strong>Email:</strong> {student.EMail}</p>
        <p><strong>Phone:</strong> {student.PhoneNumber}</p>
        <p><strong>Qualification:</strong> {student.Qualification}</p>
        <p><strong>Interested Roles:</strong> {student.InterestedRoles}</p>
        <span className='links'><strong>Linkedin</strong> <a href={student.LinkedIn} target="_blank" rel="noopener noreferrer" class="">{student.LinkedIn}</a></span>
       <span className='links'> <strong>GitHub</strong><a href={student.Github} target="_blank" rel="noopener noreferrer" class="">{student.Github}</a></span>
      </div>
      <div class="">
     
      </div>
    </div>
  ))}
</div>

      </div>
      <button onClick={downloadAsPDF}>Download as PDF</button>
    </div>
  );
};

export default App;