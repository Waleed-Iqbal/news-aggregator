import { useContext, useState, MouseEvent, useEffect } from "react";
import {
  defaultUserSettings,
  UserSettingsContext,
} from "../../utils/userSettings";
import { availableCategories, availableSources } from "../../utils/content";

import "./settings.scss";

export default function SettingsPage() {
  const userContext = useContext(UserSettingsContext);

  const [selectedSources, setSelectedSources] = useState<string[]>(
    defaultUserSettings.sources,
  );
  const [selectedCategories, setSelectedCategories] = useState<string[]>(
    defaultUserSettings.categories,
  );

  const [numberOfArticles, setNumberOfArticles] = useState<number>(
    userContext.userSettings.numberOfArticles,
  );

  useEffect(() => {
    userContext.setUserSettings({
      sources: selectedSources,
      numberOfArticles: numberOfArticles,
      categories: selectedCategories,
    });
    // eslint-disable-next-line
  }, [selectedSources, selectedCategories, numberOfArticles]);

  const updateSelectedSources = (
    e: MouseEvent<HTMLInputElement>,
    source: string,
  ) => {
    e.stopPropagation();

    if (selectedSources.includes(source)) {
      setSelectedSources(
        selectedSources.filter((selectedSource) => selectedSource !== source),
      );
    } else {
      setSelectedSources([...selectedSources, source]);
    }
  };

  const updateSelectedCategories = (
    e: MouseEvent<HTMLInputElement>,
    category: string,
  ) => {
    e.stopPropagation();

    if (selectedCategories.includes(category)) {
      setSelectedCategories(
        selectedCategories.filter(
          (selectedCategory) => selectedCategory !== category,
        ),
      );
    } else {
      setSelectedCategories([...selectedCategories, category]);
    }
  };

  return (
    <section className="page-container settings-page">
      <h1 className="page-heading">
        Set preferences (some are selected by default)
      </h1>
      <div className="categories-container">
        <h2 className="category-heading">Sources</h2>
        <div className="categories-list">
          {availableSources.newsAPI.map((source: string) => (
            <label key={source} className="label">
              <input
                value={source}
                type="checkbox"
                className="checkbox"
                checked={selectedSources.includes(source)}
                onClick={(e) => updateSelectedSources(e, source)}
              />
              {source}
            </label>
          ))}
        </div>
      </div>
      <div className="categories-container">
        <h2 className="category-heading">Categories</h2>
        <div className="categories-list">
          {availableCategories.newsAPI.map((category: string) => (
            <label key={category} className="label">
              <input
                type="checkbox"
                value={category}
                className="checkbox"
                checked={selectedCategories.includes(category)}
                onClick={(e) => updateSelectedCategories(e, category)}
              />
              {category}
            </label>
          ))}
        </div>
      </div>

      <p className="number-of-articles">
        Number of articles to display&nbsp;
        <input
          type="number"
          value={numberOfArticles}
          onChange={(e) => setNumberOfArticles(Number(e.target.value))}
        />
      </p>
    </section>
  );
}
