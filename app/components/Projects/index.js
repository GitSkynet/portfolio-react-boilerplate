import React from 'react';
import PropTypes from 'prop-types';

import ProjectsList from './ProjectsList';
import ProjectsListItem from './ProjectsListItem';

import Project from '../../components/Project';

class Projects extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      itemHasFocus: -1,
    };
  }

  handleFocusOnItem = (id) => {
    this.setState({
      itemHasFocus: id,
    });
  };

  handleMouseOverItem = (id) => {
    this.setState({
      itemHasFocus: id,
    });
  };

  render() {
    return (
      <React.Fragment>
        <ProjectsList>
          {
            this.props.projects.map((project, idx) => (
              <ProjectsListItem
                key={project.title}
                onFocus={(ev) => this.handleFocusOnItem(project.title, ev)}
                onMouseOver={(ev) => this.handleMouseOverItem(project.title, ev)}
              >
                <Project
                  thumbnailUrl={project.thumbnail.url}
                  title={project.title}
                  links={project.externalLinks}
                  detailsTitle={project.subtitle}
                  detailsBodyText={project.description}
                  isOdd={!(idx % 2)}
                  hasFocus={project.title === this.state.itemHasFocus}
                />
              </ProjectsListItem>
            ))
          }
        </ProjectsList>
      </React.Fragment>
    );
  }
}

Projects.propTypes = {
  projects: PropTypes.array,
};

Projects.defaultProps = {
  projects: [],
};

export default Projects;