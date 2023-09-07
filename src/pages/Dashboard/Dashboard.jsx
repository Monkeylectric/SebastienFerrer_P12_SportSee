import React, { useState, useEffect } from 'react';
import './Dashboard.css';

import NavbarHorizontal from '../../components/NavbarHorizontal/NavbarHorizontal';
import NavbarVertical from '../../components/NavbarVertical/NavbarVertical';
import Title from '../../components/Title/Title';
import WeightBarChart from '../../components/WeightBarChart/WeightBarChart';
import AverageLineChart from '../../components/AverageLineChart/AverageLineChart';
import PerformanceRadarChart from '../../components/PerformanceRadarChart/PerformanceRadarChart';
import ScoreRadialBarChart from '../../components/ScoreRadialBarChart/ScoreRadialBarChart';
import KeyDataCard from '../../components/KeyDataCard/KeyDataCard';

// import { getUserActivityById, getUserAverageSession, getUserPerformance } from "../../services/mock/data.mock.service.js";

// const USER_ACTIVITY_SESSIONS = getUserActivityById(12).sessions;
// const USER_AVERAGE_SESSIONS = getUserAverageSession(12).sessions;
// const USER_PERFORMANCE = getUserPerformance(12);

import { useLoaderData } from "react-router-dom";

function Dashboard() {
    const services = useLoaderData();
    
    return (
        <React.Fragment>
            <NavbarHorizontal />
            <main>
                <NavbarVertical />
                <section className='dashboard'>
                    <Title data={ services.USER_MAIN_DATA } />
                    <div className='statistics_container'>
                        <div className='statistics_charts'>
                            <div className='statistics_main_charts'>
                                <div className='weight_chart'>
                                    <span className='weight_chart_title'>Activité quotidienne</span>
                                    <WeightBarChart data={ services.USER_ACTIVITY_SESSIONS.sessions } />
                                </div>
                            </div>
                            <div className='statistics_sub_charts'>
                                <div className='average_chart'>
                                    <span className='average_chart_title'>Durée moyenne des sessions</span>
                                    <AverageLineChart data={ services.USER_AVERAGE_SESSIONS.sessions } />
                                </div>
                                <div className='performance_chart'>
                                    <PerformanceRadarChart data={ services.USER_PERFORMANCE } />
                                </div>
                                <div className='score_chart'>
                                    <ScoreRadialBarChart data={ services.USER_MAIN_DATA.todayScore || services.USER_MAIN_DATA.score } />
                                    <span className='score_chart_value'><b>{(services.USER_MAIN_DATA.todayScore || services.USER_MAIN_DATA.score) * 100}%</b><br /> de votre objectif</span>
                                </div>
                            </div>
                        </div>
                        <div className='statistics_key_data'>
                            {
                                Object.entries(services.USER_MAIN_DATA.keyData).map((key, id) => <KeyDataCard key={id} dataKey={key[0]} dataValue={key[1]} imageId={id} /> )
                            }
                        </div>
                    </div>
                </section>
            </main>
        </React.Fragment>
    );
}

export default Dashboard;