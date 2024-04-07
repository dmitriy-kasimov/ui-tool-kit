
import './styles/index.scss'

import { Button } from './ui/components/controls/buttons/Button'

import { Checkbox } from './ui/components/controls/inputs/Checkbox'
import { RadioGroup } from './ui/components/controls/inputs/RadioGroup'
import { Slider } from './ui/components/controls/inputs/Slider'
import { Switcher } from './ui/components/controls/inputs/Switcher'
import { TextArea } from './ui/components/controls/inputs/TextArea'
import { TextField } from './ui/components/controls/inputs/TextField'
import { Link } from './ui/components/controls/links/Link'

import { ProgressBar, ProgressBarType } from './ui/widgets/information/ProgressBar'
import { Text, textFont, textSize, textColor } from './ui/components/shared/Text'

import { Alert, AlertType } from './ui/utils/Alert'
import { Modal } from './ui/utils/Modal'
import {ModalConfirm} from './ui/utils/ModalConfirm/ui/ModalConfirm'

import { Navbar } from './ui/widgets/navigation/Navbar/ui/Navbar'
import { Table } from './ui/widgets/information/Table'
import { Tape } from './ui/widgets/information/Tape'
import { Post } from './ui/widgets/information/Tape/components/Post'

import { validationStatus } from './ui/components/controls'

import IconWarning from './styles/assets/icons/warning.svg'
import IconError from './styles/assets/icons/error.svg'
import IconSuccessfully from './styles/assets/icons/successfully.svg'
import IconInfo from './styles/assets/icons/info.svg'
import IconLink from './styles/assets/icons/link.svg'

export {
    // components
        // controls
            // buttons
            Button,
            // inputs
            Checkbox,
            RadioGroup,
            Slider,
            Switcher,
            TextArea,
            TextField,
            // links
            Link,
        // shared
        ProgressBar,
        Text, textFont, textSize, textColor,
    // utils
    Alert, AlertType,
    Modal,
    ModalConfirm,
    // widgets
    Navbar,
    Table,
    Tape, Post,
    // others
    validationStatus,
    // icons
    IconWarning,
    IconError,
    IconSuccessfully,
    IconInfo,
    IconLink,
}