import React, { useState, useEffect, useContext, Suspense, lazy } from "react";
import "./Project.scss";
import Button from "../../components/button/Button";
import { openSource, socialMediaLinks } from "../../portfolio";
import StyleContext from "../../contexts/StyleContext";
export default function Projects() {
  const FailedLoading = () => null;
  const [repo, setrepo] = useState([]);
  // todo: remove useContex because is not supported
  const { isDark } = useContext(StyleContext);

  useEffect(() => {
    const getRepoData = () => {
      fetch("/profile.json")
        .then(result => {
          if (result.ok) {
            return result.json();
          }
          throw result;
        })
        .then(response => {
          setrepoFunction(response.data.user.pinnedItems.edges);
        })
        .catch(function (error) {
          console.error(
            `${error} (because of this error, nothing is shown in place of Projects section. Also check if Projects section has been configured)`
          );
          setrepoFunction("Error");
        });
    };
    getRepoData();
  }, []);

  function setrepoFunction(array) {
    setrepo(array);
  }
  if (
    !(typeof repo === "string" || repo instanceof String) &&
    openSource.display
  ) {
    return (
      <div className="main" id="opensource">
        <h1 className="project-title">Open Source Projects</h1>
        <div className="repo-cards-div-main">
          {repo.map((v, i) => {
            if (!v) {
              console.error(
                `Github Object for repository number : ${i} is undefined`
              );
            }
          })}
        </div>
        <Button
          text={"More Projects"}
          className="project-button"
          newTab={true}
        />
      </div>
    );
  } else {
    return <FailedLoading />;
  }
}
