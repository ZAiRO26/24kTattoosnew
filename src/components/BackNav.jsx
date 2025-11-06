import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft } from 'lucide-react';

const BackNav = ({ to, label, ariaLabel }) => {
  return (
    <div className="w-full px-4 pt-4 sm:px-6 sm:pt-6">
      <Link
        to={to}
        className="btn-outline inline-flex items-center space-x-2 text-sm sm:text-base"
        aria-label={ariaLabel || label}
      >
        <ArrowLeft size={18} className="text-charcoal" />
        <span>{label}</span>
      </Link>
    </div>
  );
};

export default BackNav;