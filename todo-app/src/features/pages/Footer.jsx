import React from 'react';

function Footer() {
  return (
    <footer className="card text-center mt-4 shadow-sm border-0">
      <div className="card-body bg-light">
        <h5 className="card-title mb-2">ToDo App</h5>
        <p className="card-text text-muted mb-3">
          Stay organized and get things done — one task at a time.
        </p>
        <a
          href="https://github.com/silveranon323"
          target="_blank"
          rel="noopener noreferrer"
          className="btn btn-dark btn-sm"
        >
          View on GitHub
        </a>
      </div>
      <div className="card-footer text-body-secondary bg-white">
        © {new Date().getFullYear()} Hem Kishore Pradhan — All Rights Reserved.
      </div>
    </footer>
  );
}

export default Footer;
