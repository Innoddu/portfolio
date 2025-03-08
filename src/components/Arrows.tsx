export function NextArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'rgba(0,0,0,0.5)',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        zIndex: 30, 
      }}
      onClick={onClick}
    />
    );
  }

  export function PrevArrow(props: any) {
    const { className, style, onClick } = props;
    return (
      <div
      className={className}
      style={{
        ...style,
        display: 'block',
        background: 'rgba(0,0,0,0.5)',
        width: '40px',
        height: '40px',
        borderRadius: '50%',
        zIndex: 30, 
      }}
      onClick={onClick}
    />
    );
  }

  

  