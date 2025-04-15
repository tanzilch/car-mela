/* eslint-disable react/prop-types */
import Btn from "../Buttons/Btn";

const Card = ({ bgImage, heading, paragraph, }) => {
    return (
        <div className="flex rounded-[20px] overflow-hidden shadow-lg bg-cover bg-center min-h-[350px] w-full"
            style={{ backgroundImage: `url(${bgImage})`}}
        >
            <div className='flex flex-col pt-[43px] pb-[32px] px-7  min-h-full w-full justify-between md:pt-14 md:pb-10 md:px-9'>
                <div className='max-w-[315px] flex flex-col gap-4'>
                    <div className='flex max-w-[315px] text-white text-[24px] md:text-[28px] font-bold'>{heading}</div>
                    <div className='text-white text-[14px] md:text-[16px]'>{paragraph}</div>
                </div>
                <div className='flex'>
                    <Btn className='bg-[#fff] rounded-md px-4 py-2 md:px-7 md:py-3 text-[12px] font-Roboto text-[#1D2130]' >Learn more</Btn>
                </div>
            </div>
        </div>
    );
};

export default Card;
