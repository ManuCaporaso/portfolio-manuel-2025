"use client";

import * as React from "react";

export default function Card({
  src,
  alt,
  title,
  description,
  badges = [],
  buttons = [],
  className = "",
  onImageClick,
}) {
  return (
    <div
      className={`
        card bg-base-100 border border-base-300 rounded-2xl shadow-sm
        transition-all duration-300 hover:shadow-xl hover:-translate-y-1
        ${className}
      `}
    >
      <button
        type="button"
        className="overflow-hidden rounded-t-2xl cursor-zoom-in w-full p-0 border-none bg-transparent focus:outline-primary"
        onClick={() => onImageClick && onImageClick(src, alt)}
        aria-label={`Ver imagen de ${title}`}
      >
        <figure className="m-0">
          <img
            src={src}
            alt={alt}
            className="w-full h-48 object-cover transition-transform duration-300 ease-out hover:scale-105"
          />
        </figure>
      </button>

      <div className="card-body">
        <h2 className="card-title text-left">{title}</h2>

        {badges.length > 0 && (
          <div className="flex flex-wrap gap-2 my-1">
            {badges.filter(Boolean).map((badge, index) => (
              <span key={index} className="badge badge-outline border-base-300 text-sm text-base-content/70">
                {badge}
              </span>
            ))}
          </div>
        )}

        <p className="text-left text-base-content/70 leading-relaxed">{description}</p>

        {buttons.length > 0 && (
          <div className="mt-3 card-actions justify-end flex gap-2 flex-wrap">
            {buttons.map((btn, index) => (
              <a
                key={index}
                href={btn.href}
                className={`btn ${btn.className || "btn-primary"}`}
                target="_blank"
                rel="noopener noreferrer"
              >
                {btn.label}
              </a>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}