import React from 'react';
import FrameContainer from '../../../../components/FrameContainer';
import HeroSmall from '../../../../components/HeroSmall';
import './newsSingle.css';
import * as FaIcons from 'react-icons/fa';

function NewsSinglePage() {
    return (
        <FrameContainer>
            <HeroSmall title='News Single' />
            <div className='container'>
                <ul className='news-single-page-container'>
                    <li>
                        <h3>Culpaqui officia deserunt mollit anim.</h3>
                        <p className='flex-align-items-center'>
                           <FaIcons.FaRegUser className='news-single-page-icon'/> Admin
                           <FaIcons.FaRegCalendar className='news-single-page-icon' /> July 10, 2020
                           <FaIcons.FaRegComment className='news-single-page-icon' />No Comments
                        </p>
                    </li>
                    <li>
                        <div className='news-single-page-img-box'>
                            img
                        </div>
                    </li>
                    <li>
                        <p><span>R</span>
                            utenim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu.
                            utenim ad minim veniam quis nostrud exercitation ullamco laboris nisi ut aliquip.

                        </p>
                        <p>
                            In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo. Nullam dictum felis eu pede mollis pretium. Integer tincidunt. Cras dapibus. Vivamus elementum semper nisi. Aenean vulputate eleifend tellus. Aenean leo ligula, porttitor eu, consequat vitae, eleifend ac, enim. Aliquam lorem ante, dapibus in, viverra quis, feugiat a, tellus.

                            Phasellus viverra nulla ut metus varius laoreet. Quisque rutrum. Aenean imperdiet. Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.

                            Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien.

                        </p>
                        <h3>Ordered List</h3>
                        <ol>
                            <li>1. Qui officia deserunt mollit anim id est laborum.</li>
                            <li>2. Proident sunt in culpa qui officia.</li>
                            <li>3. Officia deserunt mollit anim.</li>
                        </ol>
                        <h3>Unordered List</h3>
                        <ul>
                            <li>Qui officia deserunt mollit anim id est laborum.</li>
                            <li>Proident sunt in culpa qui officia.</li>
                            <li>Officia deserunt mollit anim.</li>
                        </ul>
                        <p>
                        Tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem.

Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante. Etiam sit amet orci eget eros faucibus tincidunt. Duis leo. Sed fringilla mauris sit amet nibh. Donec sodales sagittis magna. Sed consequat, leo eget bibendum sodales, augue velit cursus nunc, quis gravida magna mi a libero. Fusce vulputate eleifend sapien.
                        </p>
                    </li>
                </ul>
            </div>
        </FrameContainer>
    );
}

export default NewsSinglePage;