import { CustomSVGProps } from '.';

export function PersonOutline({ width, height, color }: CustomSVGProps) {
  return (
    <svg width={width} height={height} viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
      <g clip-path="url(#clip0_701_968)">
        <path
          d="M12 11C12.7911 11 13.5645 10.7654 14.2223 10.3259C14.8801 9.88635 15.3928 9.26164 15.6955 8.53074C15.9983 7.79983 16.0775 6.99556 15.9231 6.21964C15.7688 5.44372 15.3878 4.73098 14.8284 4.17157C14.269 3.61216 13.5563 3.2312 12.7804 3.07686C12.0044 2.92252 11.2002 3.00173 10.4693 3.30448C9.73836 3.60723 9.11365 4.11992 8.67412 4.77772C8.2346 5.43552 8 6.20888 8 7C8 8.06087 8.42143 9.07828 9.17157 9.82843C9.92172 10.5786 10.9391 11 12 11ZM12 5C12.3956 5 12.7822 5.1173 13.1111 5.33706C13.44 5.55683 13.6964 5.86918 13.8478 6.23463C13.9991 6.60009 14.0387 7.00222 13.9616 7.39018C13.8844 7.77814 13.6939 8.13451 13.4142 8.41422C13.1345 8.69392 12.7781 8.8844 12.3902 8.96157C12.0022 9.03874 11.6001 8.99914 11.2346 8.84776C10.8692 8.69639 10.5568 8.44004 10.3371 8.11114C10.1173 7.78224 10 7.39556 10 7C10 6.46957 10.2107 5.96086 10.5858 5.58579C10.9609 5.21072 11.4696 5 12 5Z"
          fill={color}
        />
        <path
          d="M12 12C9.87827 12 7.84344 12.7375 6.34315 14.0503C4.84285 15.363 4 17.1435 4 19C4 19.2652 4.12041 19.5196 4.33474 19.7071C4.54906 19.8946 4.83975 20 5.14286 20C5.44596 20 5.73665 19.8946 5.95098 19.7071C6.16531 19.5196 6.28571 19.2652 6.28571 19C6.28571 17.6739 6.88775 16.4021 7.95939 15.4645C9.03103 14.5268 10.4845 14 12 14C13.5155 14 14.969 14.5268 16.0406 15.4645C17.1122 16.4021 17.7143 17.6739 17.7143 19C17.7143 19.2652 17.8347 19.5196 18.049 19.7071C18.2633 19.8946 18.554 20 18.8571 20C19.1602 20 19.4509 19.8946 19.6653 19.7071C19.8796 19.5196 20 19.2652 20 19C20 17.1435 19.1571 15.363 17.6569 14.0503C16.1566 12.7375 14.1217 12 12 12Z"
          fill={color}
        />
      </g>
    </svg>
  );
}