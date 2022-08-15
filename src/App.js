import './categories.styles.scss'
import Directory from './components/directory/directory.component';

const App = () => {

  const categories = [
    {
      id: 1,
      title: "Diver Watches",
      imageURL: "https://res.cloudinary.com/dlpcdltht/image/upload/v1660495872/DiverWatchRolexSub_jrry4o.jpg"
    },
    {
      id: 2,
      title: "Pilot Watches",
      imageURL: "https://res.cloudinary.com/dlpcdltht/image/upload/v1660495952/PilotWatchIWC_r5qqi6.jpg"
    },
    {
      id: 3,
      title: "Dress Watches",
      imageURL: "https://res.cloudinary.com/dlpcdltht/image/upload/v1660495917/DressWatch_pvo8xo.jpg"
    },
    {
      id: 4,
      title: "Skeleton Watches",
      imageURL: "https://res.cloudinary.com/dlpcdltht/image/upload/v1660495961/SkeletonWatch_nkdvub.jpg"
    },
    {
      id: 5,
      title: "Moonphase Watches",
      imageURL: "https://res.cloudinary.com/dlpcdltht/image/upload/v1660495931/MoonphaseWatch_mdhcps.jpg"
    },
    {
      id: 6,
      title: "Limited Edition Watches",
      imageURL: "https://res.cloudinary.com/dlpcdltht/image/upload/v1660495942/PatekPhelipe_wrk0z1.jpg"
    }
  ]

  return (
    <Directory categories={categories} />
  );
}

export default App;
