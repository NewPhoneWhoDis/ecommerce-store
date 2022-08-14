const App = () => {

  const categories = [
    {
      id: 1,
      title: "Diver Watches"
    },
    {
      id: 2,
      title: "Pilot Watches"
    },
    {
      id: 3,
      title: "Dress Watches"
    },
    {
      id: 4,
      title: "Skeleton Watches"
    },
    {
      id: 5,
      title: "Moonphase Watches"
    },
    {
      id: 6,
      title: "Limited Edition Watches"
    }
  ]

  return (
    <div className="categories-container">
      {categories.map(({ title }) => (
        <div className="category-container">
          {/* img here */}
          <div className="background-image" />
          <div className="category-body-container">
            <h2>{title}</h2>
            <p>Shop now</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default App;
