interface LazyChildrenProps {
  children: any
}

const DURATION = 200;

function LazyChildren(props: LazyChildrenProps) {
  const [children, setChildren] = useState(props.children);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setChildren(props.children)
    }, DURATION);

    return () => clearTimeout(timeout);
  }, [props.children])
  const isSame = children == props.children;

  console.log({
    children,
    fromProps: props.children
  });

  return (
    <span
      class={clsx('transition-opacity', isSame ? 'opacity-100' : 'opacity-0')}
      style={{ duration: `${DURATION}ms` }}
    >
      {children}
    </span>
  );
}

export default LazyChildren;
