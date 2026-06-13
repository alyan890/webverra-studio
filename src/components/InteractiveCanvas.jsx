import React, { Suspense } from 'react';
import Spline from '@splinetool/react-spline';

const InteractiveCanvas = () => {
  return (
    <div className="canvas-wrapper spline-wrapper" aria-hidden="true">
      <Suspense
        fallback={
          <div
            style={{
              width: '100%',
              height: '100%',
              background:
                'radial-gradient(circle at 20% 20%, rgba(99, 102, 241, 0.14), transparent 35%), radial-gradient(circle at 80% 30%, rgba(6, 182, 212, 0.12), transparent 32%), linear-gradient(180deg, rgba(5, 5, 10, 0.92), rgba(5, 5, 10, 1))',
            }}
          />
        }
      >
        <Spline
          scene="https://prod.spline.design/QpQ3m4dqXqDYZ-8r/scene.splinecode"
          renderOnDemand
          style={{ width: '100%', height: '100%', backgroundColor: 'transparent' }}
        />
      </Suspense>
    </div>
  );
};

export default InteractiveCanvas;
