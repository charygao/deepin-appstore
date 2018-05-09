/*
 * This file was generated by qdbusxml2cpp version 0.8
 * Command line was: qdbusxml2cpp com.deepin.AppStore.Backend.Deb.xml -p lastore_deb_interface -i dbus/dbusvariant/app_version.h -i dbus/dbusvariant/installed_app_info.h -c LastoreDebInterface
 *
 * qdbusxml2cpp is Copyright (C) 2016 The Qt Company Ltd.
 *
 * This is an auto-generated file.
 * This file may have been hand-edited. Look for HAND-EDIT comments
 * before re-generating it.
 */

#include "lastore_deb_interface.h"

/*
 * Implementation of interface class LastoreDebInterface
 */

LastoreDebInterface::LastoreDebInterface(const QString &service, const QString &path, const QDBusConnection &connection, QObject *parent)
    : QDBusAbstractInterface(service, path, staticInterfaceName(), connection, parent)
{
}

LastoreDebInterface::~LastoreDebInterface()
{
}

