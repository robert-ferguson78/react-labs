import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.css";

interface Module { 
  name: string, 
  noLectures: number, 
  noPracticals: number 
};

interface CourseModulesProps { 
  title: string,
  modules: Module[] 
}

const Demo: React.FC<CourseModulesProps>= ({title, modules}) => {

  const list = modules.map((module, index) => (
      <tr key={index}>
        <td>{module.name}</td>
        <td>{module.noLectures}</td>
        <td>{module.noPracticals}</td>
      </tr>
  ));

  return (
    <>
    <h1>{title}</h1>
    <table className="table table-bordered">
      <thead>
        <tr>
          <th>Name</th>
          <th>No lectures</th>
          <th>No practicals</th>
        </tr>
      </thead>
      <tbody >
        {list}
      </tbody >
    </table>
    </>
  );
};

export default Demo;