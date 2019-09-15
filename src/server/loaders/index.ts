import { Loader } from '../../types'

import { jsLoader } from './js'
import { urlLoader } from './url'
import { fileLoader } from './file'

const loaders: Loader[] = [jsLoader, urlLoader, fileLoader]

export default loaders
