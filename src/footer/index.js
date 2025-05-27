import { registerBlockType } from '@wordpress/blocks';
import metadata from './block.json';

function Edit() {
    return <div>Footer Placeholder block in Editsor</div>
}

registerBlockType(metadata.name, {
  edit: Edit,
});
