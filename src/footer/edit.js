import { useBlockProps } from '@wordpress/block-editor';

export default function Edit() {
    const blockProps = useBlockProps();

  return (
    // This wrapper with props is important to properly render on Editor screen
    <div {...blockProps}>
      <div className='custom-placeholder-block'>Footer Placeholder</div>
    </div>
  );
}
