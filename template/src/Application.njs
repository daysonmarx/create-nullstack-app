import Nullstack from 'nullstack';

import './Application.scss';

class Application extends Nullstack {

  static async start(context) {
    await this.startProject(context);
  }

  static async startProject({project}) {
    project.name = '{{PROJECT_NAME}}';
    project.domain = 'nullstack.app';
    project.color = '#D22365';
  }

  prepare({project, page}) {
    page.title = `${project.name} - Welcome to Nullstack!`;
    page.locale = 'pt-BR';
  }

  render({page}) {
    return (
      <main>
        <h1> {page.title} </h1>
        <a href="https://nullstack.app/documentation" target="_blank"> Read the documentation </a>
      </main>
    )
  }

}

export default Application;