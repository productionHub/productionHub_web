var ProductionSidebar = (props) => (
  const populateProductions = props.projects.map(project =>
    <ProductionItem onProductionItemClick={props.onProductionItemClick}
    key={project.id}
    project={project} />
  )

  return (   
    <div>
      <p>Productions</p>
      {populateProductions}
    </div>
  )
);

// onProductionItemClick should look up the production by ID
// and route user to the production's page

// React proptypes declare what is the expected input of a prop
// Console will display warnings when violated
ProductionSidebar.proptypes = {
  projects: React.proptypes.array.isRequired;
}

window.ProductionSidebar = ProductionSidebar;