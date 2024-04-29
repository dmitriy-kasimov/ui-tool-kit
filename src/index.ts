
import './styles/index.scss'

import { Button } from './ui/components/controls/buttons/Button'

import { Checkbox } from './ui/components/controls/inputs/Checkbox'
import { RadioGroup } from './ui/components/controls/inputs/RadioGroup'
import { Slider } from './ui/components/controls/inputs/Slider'
import { Switcher } from './ui/components/controls/inputs/Switcher'
import { TextArea } from './ui/components/controls/inputs/TextArea'
import { TextField } from './ui/components/controls/inputs/TextField'
import { Link } from './ui/components/controls/links/Link'

import { ProgressBar } from './ui/widgets/information/ProgressBar'
import { Text } from './ui/components/shared/Text'


import { Modal } from './ui/utils/Modal'
import {ModalConfirm} from './ui/utils/ModalConfirm/ui/ModalConfirm'


import { Table } from './ui/widgets/information/Table'
import { Tape } from './ui/widgets/information/Tape'

import { validationStatus } from './ui/components/controls'

import IconWarning from './styles/assets/icons/warning.svg'
import IconError from './styles/assets/icons/error.svg'
import IconSuccessfully from './styles/assets/icons/success.svg'
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
        Text, 
    // utils

    Modal,
    ModalConfirm,
    // widgets

    Table,
    Tape,
    // others
    validationStatus,
    // icons
    IconWarning,
    IconError,
    IconSuccessfully,
    IconInfo,
    IconLink,
}