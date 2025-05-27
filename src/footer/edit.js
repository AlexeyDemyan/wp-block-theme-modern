import { useBlockProps } from '@wordpress/block-editor';

export default function Edit() {
    const blockProps = useBlockProps();

  return (
    <div {...blockProps}>
      <div className='custom-placeholder-block'>Footer Placeholder</div>
    </div>
  );
}
