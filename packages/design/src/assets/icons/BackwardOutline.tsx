import { CustomSVGProps } from '.';

export function BackwardOutline({ width, height, color }: CustomSVGProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 9 16" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path
        d="M7.81189 13.8196C7.87198 13.8864 7.91895 13.965 7.95013 14.0508C7.98132 14.1367 7.99609 14.2282 7.99362 14.32C7.99114 14.4119 7.97147 14.5023 7.93572 14.5862C7.89996 14.6701 7.84883 14.7457 7.78525 14.8088C7.72166 14.872 7.64686 14.9213 7.56511 14.954C7.48337 14.9868 7.39629 15.0023 7.30883 14.9997C7.22138 14.9971 7.13527 14.9765 7.05542 14.9389C6.97557 14.9013 6.90354 14.8476 6.84345 14.7809L1.18206 8.48455C1.06514 8.35466 1 8.18269 1 8.00393C1 7.82518 1.06514 7.65321 1.18206 7.52331L6.84346 1.22631C6.90315 1.15806 6.97516 1.10294 7.0553 1.06417C7.13545 1.02539 7.22212 1.00373 7.31031 1.00044C7.39849 0.997151 7.48641 1.0123 7.56897 1.045C7.65153 1.0777 7.72708 1.12731 7.79124 1.19094C7.85539 1.25457 7.90687 1.33096 7.94268 1.41566C7.97849 1.50037 7.99792 1.5917 7.99984 1.68436C8.00176 1.77702 7.98614 1.86915 7.95387 1.95541C7.92161 2.04167 7.87334 2.12034 7.81189 2.18685L2.58209 8.00393L7.81189 13.8196Z"
        fill={color}
        strokeWidth="1"
      />
    </svg>
  );
}