
import './styles/index.scss'

import { Button } from './ui/components/controls/buttons/Button'

import { Checkbox } from './ui/components/controls/inputs/Checkbox'
import { RadioGroup } from './ui/components/controls/inputs/RadioGroup'
import { Select } from './ui/components/controls/inputs/Select'
import { Slider } from './ui/components/controls/inputs/Slider'
import { Switcher } from './ui/components/controls/inputs/Switcher'
import { TextArea } from './ui/components/controls/inputs/TextArea'
import { TextField } from './ui/components/controls/inputs/TextField'
import { Link } from './ui/components/controls/links/Link'

import { Card } from './ui/components/sections/Card'

import { Loader, LoaderSize } from './ui/components/shared/Loader'
import { ProgressBar, ProgressBarType } from './ui/components/shared/ProgressBar'
import { Text, textFont, textSize, textColor } from './ui/components/shared/Text'

import { Alert, AlertType } from './ui/utils/Alert'
import { Modal } from './ui/utils/Modal'
import {ModalConfirm} from './ui/utils/ModalConfirm/ui/ModalConfirm'
import { Notify, NotifyType } from './ui/utils/Notify'
import { UITest } from './ui/utils/UITest'

import { NavBar } from './ui/widgets/NavBar'
import { Table } from './ui/widgets/Table'
import { Tape } from './ui/widgets/Tape'
import { Post } from 'ui/widgets/Tape/components/Post'
import { WindowBrowser } from './ui/widgets/WindowBrowser'

import { validationStatus } from './ui/components/controls'

import IconWarning from 'styles/assets/icons/warning.svg'
import IconError from 'styles/assets/icons/error.svg'
import IconSuccessfully from 'styles/assets/icons/successfully.svg'
import IconInfo from 'styles/assets/icons/info.svg'
import IconLink from 'styles/assets/icons/link.svg'

export {
    // components
        // controls
            // buttons
            Button,
            // inputs
            Checkbox,
            RadioGroup,
            Select,
            Slider,
            Switcher,
            TextArea,
            TextField,
            // links
            Link,
        // sections
        Card,
        // shared
        Loader, LoaderSize,
        ProgressBar, ProgressBarType,
        Text, textFont, textSize, textColor,
    // utils
    Alert, AlertType,
    Modal,
    ModalConfirm,
    Notify, NotifyType,
    UITest,
    // widgets
    NavBar,
    Table,
    Tape, Post,
    WindowBrowser,
    // others
    validationStatus,
    // icons
    IconWarning,
    IconError,
    IconSuccessfully,
    IconInfo,
    IconLink,
}