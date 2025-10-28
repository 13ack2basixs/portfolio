import './Skills.css'
import pythonSVG from '../../assets/languages/python.svg';
import htmlSVG from '../../assets/languages/html.svg';
import javaSVG from '../../assets/languages/java.svg';
import mysqlSVG from '../../assets/languages/mysql.svg';
import postgresqlSVG from '../../assets/languages/postgresql.svg';
import cssSVG from '../../assets/languages/css.svg';
import javascriptSVG from '../../assets/languages/javascript.svg';
import rSVG from '../../assets/languages/r.svg';
import typescriptSVG from '../../assets/languages/typescript.svg';

import reactSVG from '../../assets/frameworks/react.svg';
import djangoSVG from '../../assets/frameworks/django.svg';
import flaskSVG from '../../assets/frameworks/flask.svg';
import streamlitSVG from '../../assets/frameworks/streamlit.svg';
import vuejsSVG from '../../assets/frameworks/vuejs.svg';
import nodejsSVG from '../../assets/frameworks/nodejs.svg';
import umijsSVG from '../../assets/frameworks/umijs.png';
import tailwindSVG from '../../assets/frameworks/tailwind.svg';

import gitSVG from '../../assets/tools/git.svg';
import dockerSVG from '../../assets/tools/docker.svg';
import awsSVG from '../../assets/tools/aws.svg';
import tableauSVG from '../../assets/tools/tableau.svg';
import firebaseSVG from '../../assets/tools/firebase.svg';
import mongodbSVG from '../../assets/tools/mongodb.svg';

import pandasSVG from '../../assets/libraries/pandas.svg';
import numpySVG from '../../assets/libraries/numpy.svg';
import chartjsSVG from '../../assets/libraries/chartjs.svg';

const skills = () => {
    return (
        <div className='skills-container'>
            <h2 id='skills'>Skills</h2>
            <div className='icon-container'>

                <p className='skills-subtitle'>Languages</p>
                <div className='languages-icon-container'>
                    <a href='https://www.python.org/' target='_blank'><img src={pythonSVG} alt='python' className='scale-up-sm-lang'/></a>
                    <a href='https://www.java.com/en/' target='_blank'><img src={javaSVG} alt='java'/></a>
                    <a href='https://developer.mozilla.org/en-US/docs/Web/JavaScript' target='_blank'><img src={javascriptSVG} alt='javascript'/></a>
                    <a href='https://www.typescriptlang.org/' target='_blank'><img src={typescriptSVG} alt='typescript'/></a>
                    <a href='https://www.mysql.com/' target='_blank'><img src={mysqlSVG} alt='mysql' className='scale-up-sm-lang'/></a>
                    <a href='https://www.postgresql.org/' target='_blank'><img src={postgresqlSVG} alt='postgresql'/></a>
                    <a href='https://developer.mozilla.org/en-US/docs/Web/HTML' target='_blank'><img src={htmlSVG} alt='html'/></a>
                    <a href='https://developer.mozilla.org/en-US/docs/Web/CSS' target='_blank'><img src={cssSVG} alt='css'/></a>
                    <a href='https://www.r-project.org/' target='_blank'><img src={rSVG} alt='r'/></a>
                </div>

                <p className='skills-subtitle'>Frameworks</p>
                <div className='frameworks-icon-container'>
                    <a href='https://react.dev/' target='_blank'><img src={reactSVG} alt='react' className='scale-up-sm-fw'/></a>
                    <a href='https://nodejs.org/en' target='_blank'><img src={nodejsSVG} alt='nodejs'/></a>
                    <a href='https://vuejs.org/' target='_blank'><img src={vuejsSVG} alt='vuejs'/></a>
                    <a href='https://www.djangoproject.com/' target='_blank'><img src={djangoSVG} alt='django'/></a>
                    <a href='https://flask.palletsprojects.com/en/stable/' target='_blank'><img src={flaskSVG} alt='flask'/></a>
                    <a href='https://streamlit.io/' target='_blank'><img src={streamlitSVG} alt='streamlit'/></a>
                    <a href='https://umijs.org/en-US' target='_blank'><img src={umijsSVG} alt='umijs'/></a>
                    <a href='https://tailwindcss.com/' target='_blank'><img src={tailwindSVG} alt='tailwind'/></a>
                </div>

                <p className='skills-subtitle'>Tools</p>
                <div className='tools-icon-container'>
                    <a href='https://git-scm.com/' target='_blank'><img src={gitSVG} alt='git' className='scale-up-sm-tool'/></a>
                    <a href='https://www.docker.com/' target='_blank'><img src={dockerSVG} alt='docker' className='scale-up-sm-tool'/></a>
                    <a href='https://www.tableau.com/' target='_blank'><img src={tableauSVG} alt='tableau'/></a>
                    <a href='https://www.mongodb.com/' target='_blank'><img src={mongodbSVG} alt='mongodb' className='scale-up-sm-tool'/></a>
                    <a href='https://firebase.google.com/' target='_blank'><img src={firebaseSVG} alt='firebase'/></a>
                    <a href='https://aws.amazon.com/' target='_blank'><img src={awsSVG} alt='aws'/></a>
                </div>

                <p className='skills-subtitle'>Libraries</p>
                <div className='libraries-icon-container'>
                    <a href='https://pandas.pydata.org/' target='_blank'><img src={pandasSVG} alt='pandas'/></a>
                    <a href='https://numpy.org/' target='_blank'><img src={numpySVG} alt='numpy'/></a>
                    <a href='https://www.chartjs.org/' target='_blank'><img src={chartjsSVG} alt='chartjs'/></a>
                </div>
            </div>
        </div>
    )
}

export default skills;