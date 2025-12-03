const DashboardLayout = () => {
  return (
    <>
      <h1>Dashboard Layout</h1>{" "}
      <div className="custom-select secondary md">
        <select>
          <option disabled selected>
            Pick a language
          </option>
          <option>Zig</option>
          <option>Go</option>
          <option>Rust</option>
        </select>
      </div>
    </>
  );
};

export default DashboardLayout;
