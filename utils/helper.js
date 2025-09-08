//命令行工具
import inquirer from 'inquirer';
import config from '../config.js';

async function commanderLine() {
    if (process.argv.length >= 3) {
        return config.find(item => item.value === process.argv[2])
    }
    const { project } = await inquirer.prompt([
        {
            type: 'list',
            name: 'project',//key
            message: '请选择要部署的项目',
            choices: config
        }
    ])
    return config.find(item => item.value === project);
}

export default commanderLine;