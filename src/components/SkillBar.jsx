import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

const SkillBar = ({ skill }) => {
  const [currentProficiency, setCurrentProficiency] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentProficiency((prev) => {
        if (prev >= skill.proficiency) {
          clearInterval(interval);
          return skill.proficiency;
        }
        return prev + 1;
      });
    }, 10);

    return () => clearInterval(interval);
  }, [skill.proficiency]);

  return (
    <div className="w-full">
      <div className="flex justify-between">
        <span className="font-semibold">{skill.name}</span>
        <span className="font-semibold">{currentProficiency}%</span>
      </div>
      <div className="w-full bg-gray-500 rounded-full h-2 mt-2">
        <div
          className={`h-2 rounded-full transition-all duration-500 ${
            currentProficiency >= 80
              ? 'bg-green-500'
              : currentProficiency >= 50
              ? 'bg-yellow-500'
              : 'bg-red-500'
          }`}
          style={{ width: `${currentProficiency}%` }}
        ></div>
      </div>
    </div>
  );
};

// Добавям PropTypes за валидация
SkillBar.propTypes = {
  skill: PropTypes.shape({
    name: PropTypes.string.isRequired,
    proficiency: PropTypes.number.isRequired,
  }).isRequired,
};

export default SkillBar;
