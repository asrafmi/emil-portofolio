import Permib from '../../assets/experiences/logo-permib.png';
import HMDSI from '../../assets/experiences/logo-hmdsi.png';
import MetroData from '../../assets/experiences/logo-metrodata.png';

export const experience = {
  title: 'Experience',
  description: 'My experience in the field of software development:',
  list: [
    {
      id: 1,
      position: 'Staff of Human Resources Development',
      company: 'Perhimpunan Mahasiswa Bandung Telkom University',
      date: 'Aug 2023 - Present',
      img: Permib,
      description: [
        {
          id: 1,
          text: 'Gathering aspirations, hobbies and held a bonding activities of Bandung Student Association Telkom University while maintaining relationships within the community.',
        },
        {
          id: 2,
          text: 'Participate a welcoming event for new students of Telkom University residing in Bandung.',
        },
        {
          id: 3,
          text: 'Person in charge of holding a graduation party as a form of appreciation for members who have already graduated from Telkom University.',
        },
      ],
    },
    {
      id: 2,
      position: 'Staff of Social of Society Department',
      company: 'HMDSI FIT Telkom University',
      date: 'Jul 2023 - Present',
      img: HMDSI,
      description: [
        {
          id: 1,
          text: 'Person in charge of conducting an open donation activities in the association.',
        },
        {
          id: 2,
          text: 'Collaborate with fellow students associations within the Applied Science Faculty to work on charity program dedicated for Telkom University residents.',
        },
        {
          id: 3,
          text: 'Holding a social service activities as a form of guidance in a village near Telkom University.',
        },
      ],
    },
    {
      id: 3,
      position: 'Data Analytics with Business Intelligence (Independent Study)',
      company: 'Metrodata Academy · Internship',
      date: 'Aug 2023 - Dec 2023',
      img: MetroData,
      description: [
        {
          id: 1,
          text: 'Performed data transformation, data modelling, data visualizations and data reporting using Microsoft Power BI.',
        },
        {
          id: 2,
          text: 'Process data using Microsoft Excel, Microsoft Word, and Microsoft Power Point through Office 365.',
        },
        {
          id: 3,
          text: 'Understand and learn the primary database concepts with CompTIA+ modules.',
        },
      ],
    },
  ],
};
