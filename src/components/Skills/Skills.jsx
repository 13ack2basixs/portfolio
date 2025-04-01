import './Skills.css'
import pythonSVG from '../../assets/languages/python.svg';
import htmlSVG from '../../assets/languages/html.svg';
import javaSVG from '../../assets/languages/java.svg';
import mysqlSVG from '../../assets/languages/mysql.svg';
import postgresqlSVG from '../../assets/languages/postgresql.svg';
import cssSVG from '../../assets/languages/css.svg';
import javascriptSVG from '../../assets/languages/javascript.svg';
import rSVG from '../../assets/languages/r.svg';

import reactSVG from '../../assets/frameworks/react.svg';
import djangoSVG from '../../assets/frameworks/django.svg';
import flaskSVG from '../../assets/frameworks/flask.svg';
import streamlitSVG from '../../assets/frameworks/streamlit.svg';
import vuejsSVG from '../../assets/frameworks/vuejs.svg';
import nodejsSVG from '../../assets/frameworks/nodejs.svg';

import gitSVG from '../../assets/tools/git.svg';
import dockerSVG from '../../assets/tools/docker.svg';
import awsSVG from '../../assets/tools/aws.svg';
import tableauSVG from '../../assets/tools/tableau.svg';

import pandasSVG from '../../assets/libraries/pandas.svg';
import numpySVG from '../../assets/libraries/numpy.svg';
import chartjsSVG from '../../assets/libraries/chartjs.svg';

const skills = () => {
    return (
        <div className='skills-container'>
            <h2 id='skills'>Skills</h2>
            <div className='icon-container'>

                <p className='skills-subtitle'>languages</p>
                <div className='languages-icon-container'>
                    <img src={pythonSVG} alt='python' className='scale-up-sm-lang'/>
                    <img src={javaSVG} alt='java'/>
                    <img src={javascriptSVG} alt='javascript'/>
                    <img src={mysqlSVG} alt='mysql' className='scale-up-sm-lang'/>
                    <img src={postgresqlSVG} alt='postgresql'/>
                    <img src={htmlSVG} alt='html'/>
                    <img src={cssSVG} alt='css'/>
                    <img src={rSVG} alt='r'/>
                </div>

                <p className='skills-subtitle'>frameworks</p>
                <div className='frameworks-icon-container'>
                    <img src={reactSVG} alt='react' className='scale-up-sm-fw'/>
                    <img src={nodejsSVG} alt='nodejs'/>
                    <img src={vuejsSVG} alt='vuejs'/>
                    <img src={djangoSVG} alt='django'/>
                    <img src={flaskSVG} alt='flask'/>
                    <img src={streamlitSVG} alt='streamlit'/>
                </div>

                <p className='skills-subtitle'>tools</p>
                <div className='tools-icon-container'>
                    <img src={gitSVG} alt='git' className='scale-up-sm-tool'/>
                    <img src={dockerSVG} alt='docker' className='scale-up-sm-tool'/>
                    <img src={tableauSVG} alt='tableau'/>
                    <img src={awsSVG} alt='aws'/>
                </div>

                <p className='skills-subtitle'>libraries</p>
                <div className='libraries-icon-container'>
                    <img src={pandasSVG} alt='pandas'/>
                    <img src={numpySVG} alt='numpy'/>
                    <img src={chartjsSVG} alt='chartjs'/>
                </div>
            </div>
        </div>
    )
}

export default skills;