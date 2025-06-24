import merge from 'lodash/merge';

import { fab } from './components/fab';
import { card } from './components/card';
import { chip } from './components/chip';
import { tabs } from './components/tabs';
import { menu } from './components/menu';
import { list } from './components/list';
import { table } from './components/table';
import { alert } from './components/alert';
import { paper } from './components/paper';
import { radio } from './components/radio';
import { appBar } from './components/appbar';
import { drawer } from './components/drawer';
import { dialog } from './components/dialog';
import { avatar } from './components/avatar';
import { slider } from './components/slider';
import { button } from './components/button';
import { select } from './components/select';
import { defaultProps } from './default-props';
import { switches } from './components/switch';
import { tooltip } from './components/tooltip';
import { popover } from './components/popover';
import { stepper } from './components/stepper';
import { svgIcon } from './components/svg-icon';
import { skeleton } from './components/skeleton';
import { backdrop } from './components/backdrop';
import { progress } from './components/progress';
import { timeline } from './components/timeline';
import { checkbox } from './components/checkbox';
import { dataGrid } from './components/data-grid';
import { textField } from './components/textfield';
import { accordion } from './components/accordion';
import { typography } from './components/typography';
import { pagination } from './components/pagination';
import { datePicker } from './components/date-picker';
import { breadcrumbs } from './components/breadcrumbs';
import { cssBaseline } from './components/css-baseline';
import { buttonGroup } from './components/button-group';
import { autocomplete } from './components/autocomplete';
import { toggleButton } from './components/toggle-button';
import { loadingButton } from './components/loading-button';


// ----------------------------------------------------------------------

export function componentsOverrides(theme) {
    const components = merge(
        accordion(theme),
        alert(theme),
        appBar(theme),
        autocomplete(theme),
        avatar(theme),
        backdrop(theme),
        breadcrumbs(theme),
        button(theme),
        buttonGroup(theme),
        card(theme),
        checkbox(theme),
        chip(theme),
        cssBaseline(theme),
        dataGrid(theme),
        datePicker(theme),
        dialog(theme),
        drawer(theme),
        fab(theme),
        list(theme),
        loadingButton(theme),
        menu(theme),
        pagination(theme),
        paper(theme),
        popover(theme),
        progress(theme),
        radio(theme),
        select(theme),
        skeleton(theme),
        slider(theme),
        stepper(theme),
        svgIcon(theme),
        switches(theme),
        table(theme),
        tabs(theme),
        textField(theme),
        timeline(theme),
        toggleButton(theme),
        tooltip(theme),
        typography(theme),
        defaultProps(theme)
    );

    return components;
}
