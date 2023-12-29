import React, { useRef } from 'react';
import './App.css'; 
import html2canvas from 'html2canvas';
import jsPDF from 'jspdf';

const students =[
  {
    "Name": "Arul.M ",
    "RegNo": "19384102",
    "EMail": "19384102@pondiuni.ac.in",
    "PhoneNumber": "7092817244",
    "Qualification": "M.Sc",
    "InterestedRoles": "Full-stack Javascipt Developer, App Developer",
    "Photo": "https://drive.google.com/uc?id=1zlwnnXnFgI7oiE97aB3vyYunxQ8bye1D",
    "CV": "https://drive.google.com/open?id=1d0e2euBRW1hYuWSzAf2Kwc3jFju0ohiZ",
    "LinkedIn": "https://www.linkedin.com/in/arul-murugan-3b221727a",
    "Github": "https://github.com/arulruban"
  },
  {
    "Name": "I. Chandirasegaran",
    "RegNo": "19384104",
    "EMail": "19384104@pondiuni.ac.in",
    "PhoneNumber": "9442019821",
    "Qualification": "M.Sc",
    "InterestedRoles": "App Developer, Java Developer",
    "Photo": "https://drive.google.com/uc?id=1y3tCLwXtdE9qGFXAY25dY0k66GCNKB_o",
    "CV": "https://drive.google.com/open?id=1l1QPu1EhRR6Wa0I8CUwsbXGrkgd5K9ny",
    "LinkedIn": "https://www.linkedin.com/in/chandirasegaran/",
    "Github": "https://github.com/Chandirasegaran/"
  },
  {
    "Name": "V.Deerthana",
    "RegNo": "19384105",
    "EMail": "19384105@pondiuni.ac.in",
    "PhoneNumber": "9345269336",
    "Qualification": "M.Sc",
    "InterestedRoles": "UI/UX designing",
    "Photo": "https://drive.google.com/uc?id=1-L-SS8i8Gd2gM3-mcsNsS1S4MalswYMD",
    "CV": "https://drive.google.com/open?id=10J87xdPNmJ0-xIQgWXba13oA2j2x44GH",
    "LinkedIn": "https://www.linkedin.com/in/deerthana-velu-5a7ab0289",
    "Github": "https://github.com/deerthanavelu"
  },
  {
    "Name": "Jayant kumar",
    "RegNo": "19384107",
    "EMail": "19384107@pondiuni.ac.in",
    "PhoneNumber": "7782989977",
    "Qualification": "M.Sc",
    "InterestedRoles": "Artificial intelligence/ Machine learning, Data Science, SQL OR MONGO DB",
    "Photo": "https://drive.google.com/uc?id=1WpkQtUph8l59NgRQAdzLDmLualkb3H4F",
    "CV": "https://drive.google.com/open?id=10q6wv9B9f3ycz4INIAhWnpve0KWbbCtC",
    "LinkedIn": "https://www.linkedin.com/in/me-jayant/",
    "Github": "https://github.com/me-jayant"
  },
  {
    "Name": "Lokadev M ",
    "RegNo": "19384110",
    "EMail": "19384110@pondiuni.ac.in",
    "PhoneNumber": "9361663749",
    "Qualification": "M.Sc",
    "InterestedRoles": "Full-stack Javascipt Developer, UI/UX designing\t",
    "Photo": "https://drive.google.com/uc?id=1GUBFhv0jALACG2-ycU_YMoMHpjFPMLIR",
    "CV": "https://drive.google.com/open?id=1KMI5gUqt8RFIKxvjVitxOBJP2o5f8_KD",
    "LinkedIn": "https://www.linkedin.com/in/lokadev-m-45890124a/",
    "Github": "https://github.com/mLokadev"
  },
  {
    "Name": "Mukesh.M",
    "RegNo": "19384112",
    "EMail": "19384112@pondiuni.ac.in",
    "PhoneNumber": "9597871677",
    "Qualification": "M.Sc",
    "InterestedRoles": "Networking, IOT and Embedded Systems, Cybersecurity, App Developer, Full-stack Javascipt Developer",
    "Photo": "https://drive.google.com/uc?id=18EOVvmnZMfDAw4e_duYQZo8lVhUVD7UG",
    "CV": "https://drive.google.com/open?id=1pGjshBx3hb2ZYtVBJVcT7bWMVZohG2x7",
    "LinkedIn": "https://www.linkedin.com/in/mukesh-m-9209a51b1",
    "Github": "https://github.com/msMukesh"
  },
  {
    "Name": "sasindaran",
    "RegNo": "19384119",
    "EMail": "19384119@pondiuni.ac.in",
    "PhoneNumber": "9360164822",
    "Qualification": "M.Sc",
    "InterestedRoles": "App Developer, Artificial intelligence/ Machine learning",
    "Photo": "https://drive.google.com/uc?id=1QhgcEfb5LLj0in11lVLl30DBpjUkrI4i",
    "CV": "https://drive.google.com/open?id=1fDhgfHA5KHTxPIAPHggTYbExM5PAAusD",
    "LinkedIn": "https://www.linkedin.com/in/sasindaran/",
    "Github": "https://github.com/sasindaran"
  },
  {
    "Name": "Gokulkumar K",
    "RegNo": "19384311",
    "EMail": "19384311@pondiuni.ac.in",
    "PhoneNumber": "7548842892",
    "Qualification": "M.Sc",
    "InterestedRoles": "Full-stack Python Developer, UI/UX designing",
    "Photo": "https://drive.google.com/uc?id=1t-ZgBAEvJaq0ZVuO-BjMyd9bxFw-roMn",
    "CV": "https://drive.google.com/open?id=1ZuvLTvP73vK4mfSeOmCVCOX2UdWZRETu",
    "LinkedIn": "www.linkedin.com/in/gokulkumar-k-28b3bb235",
    "Github": "https://github.com/GokulDG"
  },
  {
    "Name": "Nimisha K",
    "RegNo": "21370042",
    "EMail": "21370042@pondiuni.ac.in",
    "PhoneNumber": "8137040557",
    "Qualification": "M.Sc",
    "InterestedRoles": "Full-stack Python Developer",
    "Photo": "https://drive.google.com/uc?id=11V6oQCztTx-U75CRio6HdXWtQLqbXRdA",
    "CV": "https://drive.google.com/open?id=1V77XpisIfSmA0lCjiBQhepHIDcRtzi8V",
    "LinkedIn": "",
    "Github": "https://github.com/nimishapradeesh"
  },
  {
    "Name": "Adharsh Krishna A",
    "RegNo": "22370001",
    "EMail": "22370001@pondiuni.ac.in",
    "PhoneNumber": "9846689706",
    "Qualification": "M.Sc",
    "InterestedRoles": "UI/UX designing, Full-stack Javascipt Developer,Cloud computing(AWS/Azure/Google cloud)",
    "Photo": "https://drive.google.com/uc?id=1DU8a9t7qe4GjEH2pYesJ-pZGTEd6otmI",
    "CV": "https://drive.google.com/open?id=19pVG3BnbYawmOMiudzw4NYahYS9Z2v9F",
    "LinkedIn": "https://www.linkedin.com/in/adharsh-krishna",
    "Github": "https://github.com/adharshrj45"
  },
  {
    "Name": "Agitha achyuth kumar ",
    "RegNo": "22370003",
    "EMail": "22370003@pondiuni.ac.in",
    "PhoneNumber": "8367631003",
    "Qualification": "M.Sc",
    "InterestedRoles": "Data Analyst, Artificial intelligence/ Machine learning",
    "Photo": "https://drive.google.com/uc?id=1rUC6ehdCDQBAtVyDHmIIIkWsYOgqeXNT",
    "CV": "https://drive.google.com/open?id=1nBuegITZRjWmGuux8cvypeKVwHJymq1q",
    "LinkedIn": "www.linkedin.com/in/achyuth-kumar-775004191",
    "Github": "https://github.com/agithaachyuth-dotcom"
  },
  {
    "Name": "AKASH P",
    "RegNo": "22370004",
    "EMail": "22370004@pondiuni.ac.in",
    "PhoneNumber": "9645751189",
    "Qualification": "M.Sc",
    "InterestedRoles": "Azure Administrator, UI/UX designing, Cybersecurity",
    "Photo": "https://drive.google.com/uc?id=10IKNNQ8-t9MKeCo0_6u1WAhl2lcFGFkR",
    "CV": "https://drive.google.com/open?id=1frlmlzFCrbC7hPbvPUCkgIQIldFYgdTr",
    "LinkedIn": "www.linkedin.com/in/akash-p-ksd",
    "Github": "https://github.com/akashprasannaksd"
  },
  {
    "Name": "Akshara M",
    "RegNo": "22370005",
    "EMail": "22370005@pondiuni.ac.in",
    "PhoneNumber": "8943029558",
    "Qualification": "M.Sc",
    "InterestedRoles": "Full-stack Javascipt Developer",
    "Photo": "nil",
    "CV": "https://drive.google.com/open?id=1V2NwJLiUY0OQSTtqvw34RRWJhiVvOW3M",
    "LinkedIn": "https://www.linkedin.com/in/akshara-m-2b653628a",
    "Github": "https://github.com/akshara558"
  },
  {
    "Name": "V Anand",
    "RegNo": "22370006",
    "EMail": "22370006@pondiuni.ac.in",
    "PhoneNumber": "6302294286",
    "Qualification": "M.Sc",
    "InterestedRoles": "Generative AI",
    "Photo": "https://drive.google.com/uc?id=1oBDXX6dEigHaHZLFSHHjRZdbUswrEjfb",
    "CV": "https://drive.google.com/open?id=1w7XvUmxtZEw6jPAOJC2JIgjBFsrnM_S1",
    "LinkedIn": "https://www.linkedin.com/in/vankaramoni-anand-a09069283",
    "Github": "https://github.com/vankaramonianand"
  },
  {
    "Name": "Athul Raj M",
    "RegNo": "22370007",
    "EMail": "22370007@pondiuni.ac.in",
    "PhoneNumber": "7994471917",
    "Qualification": "M.Sc",
    "InterestedRoles": "Full-stack Javascipt Developer, App Developer",
    "Photo": "https://drive.google.com/uc?id=1uvli5dTkwYDrySuXD41pMpdMmt65gWtc",
    "CV": "https://drive.google.com/open?id=1IZG3xcck7zxYPAodK8Z1XcD6EXnRSlSd",
    "LinkedIn": "https://www.linkedin.com/in/athul-raj-m-46337b187",
    "Github": "https://github.com/AthulMckell"
  },
  {
    "Name": "Aniket Maheshwari",
    "RegNo": "22370008",
    "EMail": "22370008@pondiuni.ac.in",
    "PhoneNumber": "8923997965",
    "Qualification": "M.Sc",
    "InterestedRoles": "SQL OR MONGO DB,  Data Science,  Machine learning",
    "Photo": "https://drive.google.com/uc?id=12tqJXT7WC54J6kqZOL7mtMkOq4lypYTD",
    "CV": "https://drive.google.com/file/d/1AWTfQPUHizRHCvTeS7wCe5KqjA4KHITO/view",
    "LinkedIn": "www.linkedin.com/in/aniket-maheshwari-9a1568220",
    "Github": "https://github.com/aniket072"
  },
  {
    "Name": "Anish Giri",
    "RegNo": "22370009",
    "EMail": "22370009@pondiuni.ac.in",
    "PhoneNumber": "6294957979",
    "Qualification": "M.Sc",
    "InterestedRoles": "Artificial intelligence/ Machine learning, Data science",
    "Photo": "https://drive.google.com/uc?id=16dGPwhtelKgKb-EDJvWiuYmmvDMny1L4",
    "CV": "nil",
    "LinkedIn": "https://www.linkedin.com/in/anish-giri-a4031723a/",
    "Github": "https://github.com/Leptons1618"
  },
  {
    "Name": "Avinash Kumar ",
    "RegNo": "22370011",
    "EMail": "22370011@pondiuni.ac.in",
    "PhoneNumber": "8409774787",
    "Qualification": "M.Sc",
    "InterestedRoles": "Full-stack Javascipt Developer",
    "Photo": "https://drive.google.com/uc?id=1z4fEP4jmQozMn1ukHJtCHVCfPzFBbYIT",
    "CV": "https://drive.google.com/open?id=16vj7bwTOH3tvKVMj2Qs9TZimY98O9YxW",
    "LinkedIn": "www.linkedin.com/in/avinashpu01",
    "Github": "https://github.com/Avinash-kumar01"
  },
  {
    "Name": "Deepak Kumar Patnaik ",
    "RegNo": "22370016",
    "EMail": "22370016@pondiuni.ac.in",
    "PhoneNumber": "7873225783",
    "Qualification": "M.Sc",
    "InterestedRoles": "Artificial intelligence/ Machine learning",
    "Photo": "https://drive.google.com/uc?id=12f6jeui-MFxlc8gt-XphyglvH3z0hEL3",
    "CV": "https://drive.google.com/open?id=1Joo-wd6l8HwL8aTRsRFbwTwDdbpMbZBo",
    "LinkedIn": "https://www.linkedin.com/in/theuniquian",
    "Github": "https://github.com/TheUniquian"
  },
  {
    "Name": "Dhiraj verma ",
    "RegNo": "22370018",
    "EMail": "22370018@pondiuni.ac.in",
    "PhoneNumber": "9110193365",
    "Qualification": "M.Sc",
    "InterestedRoles": "Data science, UI/UX designing",
    "Photo": "https://drive.google.com/uc?id=1HWS3e_G6RpYt0dw0POy2ZJPkTIHxrvwv",
    "CV": "https://drive.google.com/open?id=1Nfz5-M5ZW4mNh3JP3ci3wAylDsZh2v7r",
    "LinkedIn": "https://www.linkedin.com/in/dhiraj-verma-23704a1b3/",
    "Github": "https://github.com/Dhiraj-verma-123"
  },
  {
    "Name": "Hafis Ali ",
    "RegNo": "22370020",
    "EMail": "22370020@pondiuni.ac.in",
    "PhoneNumber": "7558022160",
    "Qualification": "M.Sc",
    "InterestedRoles": "Media production and content Creation",
    "Photo": "nil",
    "CV": "nil",
    "LinkedIn": "nil",
    "Github": "https://github.com/Hafisali23"
  },
  {
    "Name": "Harsh bhardwaj ",
    "RegNo": "22370021",
    "EMail": "22370021@pondiuni.ac.in",
    "PhoneNumber": "9205581125",
    "Qualification": "M.Sc",
    "InterestedRoles": "SQL OR MONGO DB",
    "Photo": "https://drive.google.com/uc?id=17MHUyzbEUhlz2Iz5JOuyjWkpVZRCU-v1",
    "CV": "https://drive.google.com/open?id=1S30KXh1P_FEGdxZjPgcvqSkYgIVQ5pRy",
    "LinkedIn": "https://www.linkedin.com/in/harsh-bhardwaj-b45a7b184",
    "Github": "https://github.com/hb57115"
  },
  {
    "Name": "Jimmy Basumatari",
    "RegNo": "22370024",
    "EMail": "22370024@pondiuni.ac.in",
    "PhoneNumber": "9706751412",
    "Qualification": "M.Sc",
    "InterestedRoles": "Data science, UI/UX designing",
    "Photo": "https://drive.google.com/uc?id=1bE0JzxOEPZQqmWiuPghl-1Rq57nEpzPn",
    "CV": "https://drive.google.com/open?id=1-HF0Rv9fUn4ouiwAutQFcN1QPgS1SdBF",
    "LinkedIn": "www.linkedin.com/in/jimmy-basumatari",
    "Github": "https://github.com/jimmybsty"
  },
  {
    "Name": "Keya Das",
    "RegNo": "22370026",
    "EMail": "22370026@pondiuni.ac.in",
    "PhoneNumber": "7584028785",
    "Qualification": "M.Sc",
    "InterestedRoles": "Full-stack Javascipt Develop, App Developer, IOT",
    "Photo": "https://drive.google.com/uc?id=1D3f03fy1UdAPUjrJe9fvj8Oh3uiopqrR",
    "CV": "https://drive.google.com/open?id=19oHwGKR4uOimN7xBzgayolFlsygczMV3",
    "LinkedIn": "www.linkedin.com/in/keya-das-60a99a290",
    "Github": "https://github.com/KeyaDas"
  },
  {
    "Name": "P.kowsalya",
    "RegNo": "22370027",
    "EMail": "22370027@pondiuni.ac.in",
    "PhoneNumber": "8531065590",
    "Qualification": "M.Sc",
    "InterestedRoles": "Full-stack Javascipt Developer, UI/UX designing",
    "Photo": "https://drive.google.com/uc?id=1WWNO-U7s-kGdCowssviHEItPlPFeN1nt",
    "CV": "https://drive.google.com/open?id=1yiZUiOOzsHDj0t4L11U_oq0vuWlcTygN",
    "LinkedIn": "https://www.linkedin.com/in/kowsalya-p-a-pichai-ramar-9054b527b",
    "Github": "https://github.com/22370027"
  },
  {
    "Name": "Kukkadam Prudhvi Kumar",
    "RegNo": "22370028",
    "EMail": "22370028@pondiuni.ac.in",
    "PhoneNumber": "9133729761",
    "Qualification": "M.Sc",
    "InterestedRoles": "Media production and content Creation",
    "Photo": "https://drive.google.com/uc?id=1z5YTzTN3vj85p_wODutzItRYPjEPVIdK",
    "CV": "https://drive.google.com/open?id=1ohQ9W0QLg5fb0CqUxwP_RMwh0igWJjOD",
    "LinkedIn": "https://www.linkedin.com/in/prudhvi-kumar-kukkadam-b04a68293/",
    "Github": "https://github.com/prudhvikumar1"
  },
  {
    "Name": "Mark Darren Marbaniang",
    "RegNo": "22370030",
    "EMail": "22370030@pondiuni.ac.in",
    "PhoneNumber": "6009555722",
    "Qualification": "M.Sc",
    "InterestedRoles": "Full-stack Python Developer, Artificial intelligence/ Machine learning",
    "Photo": "https://drive.google.com/uc?id=1meFS9HAk330e3PMcHNsTktcLwGMb__XL",
    "CV": "https://drive.google.com/open?id=12_CvA87zUPoDTR9CMc5pDXsdGvfcD2Si",
    "LinkedIn": "https://www.linkedin.com/in/mark-marbanaing-41a2921a6/",
    "Github": "https://github.com/MarkDarrenMarbaniang/"
  },
  {
    "Name": "Megha M",
    "RegNo": "22370031",
    "EMail": "22370031@pondiuni.ac.in",
    "PhoneNumber": "9995119931",
    "Qualification": "M.Sc",
    "InterestedRoles": "Full-stack Javascipt Developer, Python Developer, Java Developer",
    "Photo": "https://drive.google.com/uc?id=1DlEEjdVJTG_WOSA-vbsMSfDkU2FOTDPe",
    "CV": "https://drive.google.com/open?id=1P7_-bTE_Pu6a0c62erOwNyZfZaJ-FUZX",
    "LinkedIn": "www.linkedin.com/in/megha-m-a900621b4",
    "Github": "https://github.com/megha-ammu"
  },
  {
    "Name": "Mohamed Azgar",
    "RegNo": "22370032",
    "EMail": "22370032@pondiuni.ac.in",
    "PhoneNumber": "9597392940",
    "Qualification": "M.Sc",
    "InterestedRoles": "App Developer ",
    "Photo": "https://drive.google.com/uc?id=1y52aZIZ9K5ARlVqQh2VCZJpN1-C0R0rT",
    "CV": "https://drive.google.com/open?id=1YKQx2TQfa4F4T88lSP07J5ndaRUiPAuW",
    "LinkedIn": "https://www.linkedin.com/in/%C3%9Flack-soul-93a323202?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BwSk58bihTPiaPy3UZlS%2FNg%3D%3D",
    "Github": "https://github.com/Mohamed-Azgar"
  },
  {
    "Name": "Rajesh",
    "RegNo": "22370041",
    "EMail": "22370041@pondiuni.ac.in",
    "PhoneNumber": "8870720536",
    "Qualification": "M.Sc",
    "InterestedRoles": "Cybersecurity, Networking",
    "Photo": "https://drive.google.com/uc?id=1ut5JUowA3nOEysHElzJbhGI8SfsUJUEb",
    "CV": "https://drive.google.com/open?id=1vvoJBE4hb49P3wddlkpMyI2RZ-hkO7a2",
    "LinkedIn": "https://www.linkedin.com/in/rajesh-professor/",
    "Github": "https://github.com/blackhacker2703"
  },
  {
    "Name": "RAMSI FAVAS KP",
    "RegNo": "22370042",
    "EMail": "22370042@pondiuni.ac.in",
    "PhoneNumber": "9846197671",
    "Qualification": "M.Sc",
    "InterestedRoles": "Full-stack Javascipt Developer",
    "Photo": "https://drive.google.com/uc?id=1juRNxe2okNiQO__T3gnWYDuVpFF3mYdP",
    "CV": "https://drive.google.com/open?id=1Dm71W5jq35BHdZlLBbWP9SRMZmWMGrvs",
    "LinkedIn": "https://www.linkedin.com/in/ramsifavas",
    "Github": "https://github.com/ramsifavaskp"
  },
  {
    "Name": "Sabiha Sultana ",
    "RegNo": "22370043",
    "EMail": "22370043@pondiuni.ac.in",
    "PhoneNumber": "8927886906",
    "Qualification": "M.Sc",
    "InterestedRoles": "Artificial intelligence/ Machine learning, Data Analyst, App Developer",
    "Photo": "https://drive.google.com/uc?id=17kqyB4ydnDHfwsMTqr0vcjBz9eHliXct",
    "CV": "https://drive.google.com/open?id=1K6GYEUV3tF1_QcUk4Wco0iaEWDfn5cs1",
    "LinkedIn": "http://www.linkedin.com/in/sabiha-sultana",
    "Github": "https://github.com/sultanasabiha"
  },
  {
    "Name": "Salman",
    "RegNo": "22370044",
    "EMail": "22370044@pondiuni.ac.in",
    "PhoneNumber": "9946371099",
    "Qualification": "M.Sc",
    "InterestedRoles": "Python Backend Developer, FullStack Web Developer",
    "Photo": "nil",
    "CV": "https://drive.google.com/file/d/1SY0vAuJ8w4yCl-SplWhKMNf_rf2TRkTj/view",
    "LinkedIn": "https://www.linkedin.com/in/salman-pp-340598238/",
    "Github": "https://github.com/SalmanSaalu"
  },
  {
    "Name": "SARATH KUMAR P",
    "RegNo": "22370045",
    "EMail": "22370045@pondiuni.ac.in",
    "PhoneNumber": "8943123237",
    "Qualification": "M.Sc",
    "InterestedRoles": "Java Developer",
    "Photo": "https://drive.google.com/uc?id=1MANrq7ThelcFRFeNl_535v6snFAMrsnH",
    "CV": "https://drive.google.com/open?id=1-FFlXODtOXczvqpdWasYCrBaa22mVLYB",
    "LinkedIn": "http://www.linkedin.com/in/sarath-kumar-969a721a5",
    "Github": "https://github.com/sarath-5"
  },
  {
    "Name": "Sayantan Chakraborty ",
    "RegNo": "22370047",
    "EMail": "22370047@pondiuni.ac.in",
    "PhoneNumber": "6291566151",
    "Qualification": "M.Sc",
    "InterestedRoles": "Full-stack Javascipt Developer, Generative AI, Media production",
    "Photo": "https://drive.google.com/uc?id=1JY3halaR0e5ybV8AQCbXxd0GbeHGO3bw",
    "CV": "https://drive.google.com/open?id=1YgKXJ_intpU_L6TKun57stPcevOhXVYO",
    "LinkedIn": "https://www.linkedin.com/in/sayantan-chakraborty-357298290/",
    "Github": "https://github.com/Hacker-Man07"
  },
  {
    "Name": "Shubham Rajesh Saroj",
    "RegNo": "22370051",
    "EMail": "22370051@pondiuni.ac.in",
    "PhoneNumber": "8850497364",
    "Qualification": "M.Sc",
    "InterestedRoles": "Java Developer, Full-stack Javascipt Developer",
    "Photo": "https://drive.google.com/uc?id=1Ls9GuancQP1OhlZXlVPNFV9UiRR84uY9",
    "CV": "https://drive.google.com/open?id=1cnW6d10PBJ-Y66DqPwUkE-cEH0yGadry",
    "LinkedIn": "https://www.linkedin.com/in/shubham-saroj109",
    "Github": "https://github.com/shubhamrsaroj?tab=overview&from=2023-09-01&to=2023-09-27"
  },
  {
    "Name": "SINAN RAHMAN C K",
    "RegNo": "22370052",
    "EMail": "22370052@pondiuni.ac.in",
    "PhoneNumber": "8086370415",
    "Qualification": "M.Sc",
    "InterestedRoles": "Cybersecurity",
    "Photo": "nil",
    "CV": "https://drive.google.com/open?id=17FPNIhrrm3vYDdbW_h5X3koFkwwCZfSV",
    "LinkedIn": "www.linkedin.com/in/sinan-rahman-c-k",
    "Github": "https://github.com/SinanRCK"
  },
  {
    "Name": "SUBHASHREE PRIYADARSHINI SAHU ",
    "RegNo": "22370053",
    "EMail": "22370053@pondiuni.ac.in",
    "PhoneNumber": "9668009798",
    "Qualification": "M.Sc",
    "InterestedRoles": "Full-stack Javascipt Developer, Data Science, Cloud computing - AWS",
    "Photo": "https://drive.google.com/uc?id=1RNu5bFh3xkwhAnBP2mNSrHW2ua-biDQk",
    "CV": "https://drive.google.com/open?id=1zSa4pWl8sQRS9Gfut-bUT74maAQiRte3",
    "LinkedIn": "https://www.linkedin.com/in/subhashree-priyadarshini-sahu-000891180/",
    "Github": "https://github.com/31Subhashree"
  },
  {
    "Name": "Sharmila Arthi A",
    "RegNo": "22394003",
    "EMail": "22394003@pondiuni.ac.in",
    "PhoneNumber": "8903587908",
    "Qualification": "M.Tech NIS",
    "InterestedRoles": "Networking, communication, Testing, Troubleshooting ",
    "Photo": "https://drive.google.com/uc?id=1Bx_4XBHp_kEX0V8JKKb80gQSriRKpJFQ",
    "CV": "https://drive.google.com/open?id=1GFSJTAUctCxlNMQSXrK_6i-RaCk5DjHm",
    "LinkedIn": "http://linkedin.com/in/sharmila-arthi-11a2aa1a3",
    "Github": "https://github.com/Sharmilaarthi20"
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