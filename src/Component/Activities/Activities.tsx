import React from 'react';
import activitiesData from './activitiesData.json';
import './Activities.scss';

const PLACEHOLDER_IMAGE = '/images/activityimg.svg';

function Activities() {
  const items = activitiesData && activitiesData.activities ? activitiesData.activities.items : [];

  const resolveSrc = (imgPath: string | undefined) => {
    if (!imgPath) return PLACEHOLDER_IMAGE;
    return imgPath.startsWith('/') ? imgPath : `${process.env.PUBLIC_URL}/${imgPath}`;
  };

  return (
    <section className="activities-section">
      {/* <h2 className="activities-title">{(activitiesData && activitiesData.activities && activitiesData.activities.title) || 'Activities'}</h2> */}

      <div className="activities-grid">
        {items.map((activity: any, index: number) => (
          <div key={activity.id} className={`activity-card activity-${index + 1}`}>
            <div className="activity-image-wrapper">
              <div className="activity-image-frame">
                <img
                  src={resolveSrc(activity.image)}
                  alt={activity.name}
                  className="activity-image"
                  loading="lazy"
                  onError={(e) => {
                    const img = e.currentTarget as HTMLImageElement;
                    img.onerror = null;
                    img.src = PLACEHOLDER_IMAGE;
                  }}
                />
              </div>
            </div>
            <p className="activity-name">{activity.name}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Activities;
