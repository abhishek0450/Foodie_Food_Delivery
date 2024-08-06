

#types of import export

Default Import/Export => used when only one export needs to be done
export default Component;
import Component from "./path";

Named Import/Export => used when multiple export from same file
export const Components = {
    // ...
}

import {Components} from "./path"
