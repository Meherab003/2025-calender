import calender from '../../public/calender.json';
import Month from '../components/Month';

const Home = () => {
    return (
        <div>
            <p className='font-title text-4xl md:text-5xl lg:text-7xl text-white font-black text-center py-5 md:py-8 lg:py-10'>2025</p>
            <div className='grid grid-col-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 4xl:grid-cols-5 gap-10 lg:px-20 px-5 pb-20'>
                {calender.map((month) => <Month key={month.Number} month={month}></Month>)}
            </div>
        </div>
    );
};

export default Home;