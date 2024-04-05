
import Header from '../Shared/Header/Header';
import NavBar from '../Shared/NavBar/NavBar';
import LeftSideNav from '../Shared/LeftSideNav/LeftSideNav';
import RightSideNav from '../Shared/RightSideNav/RightSideNav';
import BreakingNews from './BreakingNews';
import useNewsData from '../../hooks/useNewsData';
import NewsCard from './NewsCard';



const Home = () => {
  const  {newsData,loading} = useNewsData();
  return (
    <div>

      <Header />
     <BreakingNews/>
      <NavBar />
      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        <div className="">
          <LeftSideNav />
        </div>
        {/* middle */}
        <div className="lg:col-span-2  space-y-6">
             {
              newsData.map(news=><NewsCard key={news._id} news={news} />)
             }
        </div>
        {/* middle */}
        <div className="">
          <RightSideNav />
        </div>
      </div>
    </div>
  );
}

export default Home